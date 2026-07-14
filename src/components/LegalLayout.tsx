import { type ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

type LegalLayoutProps = {
  title: string;
  warning?: string;
  children: ReactNode;
};

export function LegalLayout({ title, warning, children }: LegalLayoutProps) {
  return (
    <div className="pt-20 md:pt-24">
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-brown-800 mb-4">{title}</h1>
          <div className="divider-left mb-8" />

          {warning && (
            <div className="bg-terracotta-50 border border-terracotta-200 rounded-xl p-4 mb-8 flex items-start gap-3">
              <AlertTriangle size={20} className="text-terracotta-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-terracotta-700 font-medium">{warning}</p>
            </div>
          )}

          <div className="prose-legal space-y-8">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
