export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="text-center">
        {/* Main Spinner */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-primary-200 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          </div>

          {/* Inner ring */}
          <div
            className="absolute top-2 left-2 w-12 h-12 border-4 border-accent-200 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-accent rounded-full animate-spin"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            ></div>
          </div>

          {/* Center dot */}
          <div className="absolute top-6 left-6 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
        </div>

        {/* Loading text */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-primary-700 mb-2">
            Loading...
          </h3>
          <p className="text-sm text-primary-500">
            Please wait while we prepare your experience
          </p>
        </div>

        {/* Animated dots */}
        <div className="mt-4 flex justify-center space-x-1">
          <div
            className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
