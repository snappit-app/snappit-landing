export function Preview() {
  return (
    <section id="preview" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            See it in action.
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Watch how Snappit streamlines your workflow with powerful screen capture tools.
          </p>
        </div>

        {/* Video Preview */}
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-surface mb-16 group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 `bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="w-full h-full bg-linear-to-br from-surface to-border flex items-center justify-center">
            <div className="text-center text-foreground-secondary">
              <p className="text-sm">Demo Video</p>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Region Selection", desc: "Precise capture with overlay" },
            { title: "OCR Extraction", desc: "Instant text recognition" },
            { title: "QR Code Scanner", desc: "Decode any QR on screen" },
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface mb-4 group-hover:ring-2 ring-primary transition-all">
                {/* Placeholder for screenshots */}
                <div className="w-full h-full bg-gradient-to-br from-surface to-border flex items-center justify-center">
                  <div className="text-center text-foreground-secondary">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-2 opacity-50"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <p className="text-xs">Screenshot {index + 1}</p>
                  </div>
                </div>
              </div>
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-foreground-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
