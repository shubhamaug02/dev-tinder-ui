export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p>
                At <strong>TinderDev</strong>, accessible from <strong>https://tinderdev.com/</strong>, we value your privacy.
            </p>

            <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
            <p>Name, email, contact details, payment information, cookies, etc.</p>

            <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>Process transactions</li>
                <li>Communicate about orders</li>
                <li>Improve services</li>
                <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">3. Sharing of Information</h2>
            <p>We only share data with trusted third parties (e.g., payment processors, shipping partners).</p>

            <h2 className="text-xl font-semibold mt-6">4. Security</h2>
            <p>We use industry-standard measures to protect your data.</p>

            <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
            <p>
                You may request access, correction, or deletion of your data by contacting{" "}
                <a href="mailto:shubhampatel@tinderdev.com" className="text-blue-600 underline">shubhampatel@tinderdev.com</a>.
            </p>
        </div>
    );
}
