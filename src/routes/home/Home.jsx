import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="bg-emerald-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white min-h-screen w-full">
        <header className="sticky top-0 z-50 bg-emerald-950/80 backdrop-blur-md border-b border-emerald-900">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-emerald-950 font-bold text-xl shadow-lg shadow-emerald-900">
                ✓
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TaskFlow
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-emerald-200/80">
              <a href="#features" className="hover:text-emerald-400">
                Features
              </a>
              <a href="" className="">
                About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                to={"/Todo"}
                type="button"
                // onClick={onOpenApp}
                className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-900/50 transition-all cursor-pointer"
              >
                Open App
              </Link>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden pt-36 pb-28 lg:pt-44 lg:pb-36">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-900/50 border border-emerald-800 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Organize your day effortlessly
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
              Get things done with{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">
                absolute clarity
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-emerald-200/70 max-w-2xl mx-auto leading-relaxed">
              The minimalist task management app designed to help you track
              pending items, clear your backlog, and stay focused on what truly
              matters.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={"/Todo"}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-8 py-4 rounded-xl shadow-xl shadow-emerald-900 transition-all text-center cursor-pointer"
              >
                Launch Todo App
              </Link>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="py-24 bg-emerald-900/20 border-t border-emerald-900/50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
                Simple & Intuitive
              </h2>
              <h3 className="text-3xl font-bold text-white tracking-tight">
                Everything you need to stay on track
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-emerald-950 border border-emerald-900/80">
                <div className="w-12 h-12 bg-emerald-900/60 text-emerald-400 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                  ⚡
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Instant Task Addition
                </h4>
                <p className="text-emerald-200/70 leading-relaxed">
                  Quickly jot down tasks on the fly with a clean input bar.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-emerald-950 border border-emerald-900/80">
                <div className="w-12 h-12 bg-emerald-900/60 text-emerald-400 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                  📊
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Live Progress Tracking
                </h4>
                <p className="text-emerald-200/70 leading-relaxed">
                  Real-time counts keeping track of total tasks and completed
                  items.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-emerald-950 border border-emerald-900/80">
                <div className="w-12 h-12 bg-emerald-900/60 text-emerald-400 rounded-xl flex items-center justify-center font-bold text-lg mb-6">
                  🎯
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Zero Distractions
                </h4>
                <p className="text-emerald-200/70 leading-relaxed">
                  Clutter-free workspace designed so you focus solely on
                  execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-emerald-950 text-emerald-400/60 py-12 border-t border-emerald-900">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 text-emerald-950 rounded-lg flex items-center justify-center font-bold">
                ✓
              </div>
              <span className="text-white font-semibold">TaskFlow</span>
            </div>
            <p className="text-sm">
              &copy; 2026 TaskFlow. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
