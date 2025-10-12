import { BaseLayout } from '@/components/layout/BaseLayout';
import Image from 'next/image';

export default function QRPage() {
  return (
    <BaseLayout>
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <Image
            src="/images/qr.png"
            alt="QR Code"
            width={600}
            height={600}
            className="mx-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </BaseLayout>
  );
}
