export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <form className="flex flex-col w-full max-w-md space-y-4">
                <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-400" />
                <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-400" />
                <textarea placeholder="Message" className="p-3 rounded bg-gray-400" rows={4}></textarea>
                <button className="px-6 py-3 bg-teal-500 rounded text-white hover:bg-teal-600">
                    Send
                </button>
            </form>
        </div>
    );
}