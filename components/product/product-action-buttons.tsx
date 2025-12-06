"use client";

import { useLanguageStore } from "@/store/language-store";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductActionButtonsProps {
  onSendInquiry?: () => void;
  onChatNow?: () => void;
}

export function ProductActionButtons({ onSendInquiry, onChatNow }: ProductActionButtonsProps) {
  const { language } = useLanguageStore();
  const isRTL = language === "fa";

  return (
    <div className="space-y-3" dir={isRTL ? "rtl" : "ltr"}>
      <Button
        onClick={onSendInquiry}
        className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-semibold h-12 text-base"
        size="lg"
      >
        <Send className="w-5 h-5" />
        {language === "fa" ? "ارسال درخواست" : "Send Inquiry"}
      </Button>
      
      <Button
        onClick={onChatNow}
        variant="outline"
        className="w-full border-2 border-gray-300 hover:border-[var(--color-primary)] hover:bg-gray-50 font-semibold h-12 text-base"
        size="lg"
      >
        <MessageCircle className="w-5 h-5" />
        {language === "fa" ? "چت با تأمین‌کننده" : "Chat Now"}
      </Button>
      
      <div className="pt-2 text-sm text-gray-600 text-center">
        {language === "fa"
          ? "پرداخت در ۴ قسط بدون بهره با PayPal Klarna"
          : "4 interest-free payments with PayPal Klarna"}
      </div>
      
      <div className="pt-2 text-xs text-gray-500 text-center">
        {language === "fa"
          ? "محافظت‌ها برای این محصول"
          : "Protections for this product"}
      </div>
    </div>
  );
}



