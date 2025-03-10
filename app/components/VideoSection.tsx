'use client';

export default function VideoSection() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Take a Virtual Tour</h2>
      <div className="max-w-4xl mx-auto relative aspect-video rounded-lg overflow-hidden">
        <video
          controls
          className="w-full h-full"
          poster="/images/farmhouse/1.jpg"
        >
          <source src="/videos/farmhouse/20.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
} 