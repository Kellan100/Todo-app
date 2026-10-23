import { Link } from "react-router"
function About() {
  return (
   <main className=" px-6 bg-emerald-950 py-12 w-full">
      <div className="bg-emerald-950/40 border border-emerald-900/50 rounded-2xl p-8 shadow-xl backdrop-blur-sm space-y-8">
        
        {/* Header Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-emerald-400 mb-3">About This App</h2>
          <p className="text-gray-300 leading-relaxed text-base">
            Welcome to your ultimate task management solution. This Todo App helps you keep track of your daily goals, boost productivity, and stay organized effortlessly. 
          </p>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">🚀 Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-emerald-900/20 border border-emerald-800/30 p-4 rounded-xl">
              <h4 className="font-semibold text-emerald-300 mb-1">Fast & Lightweight</h4>
              <p className="text-sm text-gray-400">Lightning-fast performance designed for seamless daily use.</p>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-800/30 p-4 rounded-xl">
              <h4 className="font-semibold text-emerald-300 mb-1">Status Tracking</h4>
              <p className="text-sm text-gray-400">Easily monitor your completed and pending daily goals.</p>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-800/30 p-4 rounded-xl">
              <h4 className="font-semibold text-emerald-300 mb-1">Modern UI</h4>
              <p className="text-sm text-gray-400">Crafted with a sleek, dark-themed emerald aesthetic.</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">🛠️ Built With</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-sm px-3 py-1.5 rounded-lg">React</span>
            <span className="bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-sm px-3 py-1.5 rounded-lg">Tailwind CSS</span>
            <span className="bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-sm px-3 py-1.5 rounded-lg">JavaScript</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-emerald-900/50 flex items-center justify-between">
          <span className="text-sm text-gray-400">Ready to manage your day?</span>
          <Link 
            to="/todo" 
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition shadow-lg shadow-emerald-950"
          >
            Go to Todo List &rarr;
          </Link>
        </div>

      </div>
    </main>
  )
}

export default About
