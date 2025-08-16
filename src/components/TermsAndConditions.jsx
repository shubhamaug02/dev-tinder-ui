import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
            <p>Welcome to <strong>TinderDev</strong>!</p>
            <p className="mt-4">
                These Terms and Conditions outline the rules and regulations for the use of{" "}
                <strong>https://tinderdev.com/</strong>.
            </p>
            <p className="mt-4">
                By accessing this website, we assume you accept these terms. Do not continue if you do not agree.
            </p>

            <h2 className="text-xl font-semibold mt-6">1. Use of Service</h2>
            <p>You agree to use our services only for lawful purposes and in compliance with all applicable laws.</p>

            <h2 className="text-xl font-semibold mt-6">2. Payments</h2>
            <p>By making a purchase, you agree to provide accurate and complete payment and account details.</p>

            <h2 className="text-xl font-semibold mt-6">3. Refunds & Cancellations</h2>
            <p>
                Handled in accordance with our <Link to="/refund" className="text-blue-600 underline">Refund Policy</Link>.
            </p>

            <h2 className="text-xl font-semibold mt-6">4. Limitation of Liability</h2>
            <p>[Your Company Name] will not be held responsible for damages arising from use or inability to use our services.</p>

            <h2 className="text-xl font-semibold mt-6">5. Governing Law</h2>
            <p>These terms are governed by the laws of India.</p>

            <p className="mt-6">For questions, contact us at <a href="mailto:" className="text-blue-600 underline">shubhampatel@tinderdev.com</a>.</p>
        </div>
    );
}
