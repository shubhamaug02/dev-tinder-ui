export default function RefundPolicy() {
    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>
            <p>At TinderDev, we want you to be satisfied with your purchase.</p>

            <h2 className="text-xl font-semibold mt-6">1. Cancellation</h2>
            <p>
                Orders can be canceled within <strong>24 hours</strong> of placement by emailing{" "}
                <a href="mailto:shubhampatel@tinderdev.com" className="text-blue-600 underline">shubhampatel@tinderdev.com</a>.
            </p>

            <h2 className="text-xl font-semibold mt-6">2. Refunds</h2>
            <p>Refunds may be provided if:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>Product/service not delivered</li>
                <li>Product is defective or damaged</li>
                <li>Duplicate payment made</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. Non-Refundable Items</h2>
            <p>Digital goods, subscriptions, or items marked "final sale" are non-refundable.</p>

            <h2 className="text-xl font-semibold mt-6">4. Timeline</h2>
            <p>Refunds are processed within <strong>7 business days</strong> to your original payment method.</p>
        </div>
    );
}
