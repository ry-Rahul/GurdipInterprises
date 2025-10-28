export default function InquiryForm() {
  return (
    // Main section with dark brown background and vertical padding
    <section className="bg-[#3d2f2a] py-12">
      {/* Container to center content with max width */}
      <div className="max-w-3xl mx-auto px-6">
        {/* White box for the form */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
            Tell Us What Are You Looking For ?
          </h2>

          {/* Textarea input for user description */}
          <textarea
            placeholder="Describe Your Requirement"
            className="w-full border border-gray-300 rounded-md min-h-32 p-3 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f5c842] mb-4 resize-none"
          ></textarea>

          {/* Submit button centered horizontally */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#f5c842] hover:bg-[#e5b832] text-black font-bold px-8 py-3 rounded flex items-center gap-2 transition-colors"
            >
              <span>➤</span>
              Send it Now !
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
