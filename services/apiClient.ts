// Base API client configuration

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface ApiError {
  message: string
  status: number
}

/**
 * Generic API request function
 */
async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      const error: ApiError = {
        message: `HTTP error! status: ${response.status}`,
        status: response.status,
      }
      throw error
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API request failed: ${error.message}`)
    }
    throw error
  }
}

/**
 * GET request
 */
export async function get<T>(endpoint: string): Promise<T> {
  return request<T>(endpoint, {
    method: 'GET',
  })
}

/**
 * POST request
 */
export async function post<T>(
  endpoint: string,
  body: unknown
): Promise<T> {
  return request<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

/**
 * PUT request
 */
export async function put<T>(
  endpoint: string,
  body: unknown
): Promise<T> {
  return request<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(body),
  })
}

/**
 * DELETE request
 */
export async function del<T>(endpoint: string): Promise<T> {
  return request<T>(endpoint, {
    method: 'DELETE',
  })
}


