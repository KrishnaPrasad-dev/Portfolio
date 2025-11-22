// src/components/Loading.jsx
export default function CanvasLoader() {
  return (
    <div className="bg-black/60 backdrop-blur-sm rounded p-4 flex items-center justify-center">
      <div className="loader">
        {/* simple spinner or SVG */}
        <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>
      </div>
    </div>
  );
}
