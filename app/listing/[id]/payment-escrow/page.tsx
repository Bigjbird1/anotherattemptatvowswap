import PaymentEscrow from '@/components/PaymentEscrow';

interface PageProps {
  params: {
    id: string;
  }
}

export default function PaymentEscrowPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-6">Payment & Escrow</h1>
        <PaymentEscrow listingId={params.id} />
      </div>
    </div>
  );
}

