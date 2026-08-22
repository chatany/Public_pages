import React from "react";

export default function StocksOrbitVisual() {
  return (
    <div className="relative w-full max-w-[540px] h-[440px] md:h-[480px] flex items-center justify-center select-none overflow-visible">
      {/* Background Ambient Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#2edbad]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute w-96 h-96 rounded-full bg-[#16c784]/5 blur-[100px] pointer-events-none -z-10" />

      {/* Orbital Concentric SVG Rings */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 540 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Orbit Ring */}
        <ellipse
          cx="270"
          cy="240"
          rx="240"
          ry="190"
          stroke="#2b3139"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.45"
        />
        {/* Middle Orbit Ring */}
        <ellipse
          cx="270"
          cy="240"
          rx="175"
          ry="135"
          stroke="#2b3139"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />
        {/* Inner Orbit Ring */}
        <ellipse
          cx="270"
          cy="240"
          rx="115"
          ry="90"
          stroke="#2b3139"
          strokeWidth="1"
          strokeDasharray="2 4"
          strokeOpacity="0.5"
        />
      </svg>

      {/* Floating Coordinate / Decorative Labels */}
      <span className="absolute top-[8%] left-[26%] text-[11px] font-mono text-[#848e9c]/60 pointer-events-none">
        +3.2%
      </span>
      <span className="absolute top-[6%] right-[22%] text-[11px] font-mono text-[#848e9c]/50 pointer-events-none">
        13.12
      </span>
      <span className="absolute bottom-[44%] left-[10%] text-[11px] font-mono text-[#848e9c]/50 pointer-events-none">
        +2.4%
      </span>
      <span className="absolute bottom-[16%] right-[20%] text-[11px] font-mono text-[#848e9c]/70 pointer-events-none">
        $221.05 <span className="text-[#16c784]">+1.1%</span>
      </span>

      {/* CENTER GLOWING CORE HUB */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Animated Outer Glow Ring */}
        <div className="absolute w-[160px] h-[160px] rounded-full border border-[#2edbad]/40 animate-ping opacity-20 pointer-events-none" />
        
        {/* Glow Halo */}
        <div className="absolute w-[150px] h-[150px] rounded-full bg-gradient-to-tr from-[#2edbad]/20 via-[#16c784]/30 to-transparent blur-md pointer-events-none" />

        {/* Center Card */}
        <div className="relative w-[138px] h-[138px] rounded-full bg-[#0d131a] border-2 border-[#2edbad]/60 shadow-[0_0_35px_rgba(46,219,173,0.35)] flex flex-col items-center justify-center text-center p-2 transition-transform duration-300 hover:scale-105">
          {/* Inner Accent Ring */}
          <div className="absolute inset-[3px] rounded-full border border-[#2edbad]/20 pointer-events-none" />
          
          <span className="text-3xl font-extrabold text-[#2edbad] tracking-tight leading-none drop-shadow-[0_0_12px_rgba(46,219,173,0.6)]">
            0%
          </span>
          <span className="text-[10px] font-bold tracking-widest text-[#eaecef] uppercase mt-1">
            TRADING FEES
          </span>
          <span className="text-[9px] text-[#848e9c] tracking-tight mt-0.5">
            US Stocks · Limited time
          </span>
        </div>
      </div>

      {/* FLOATING STOCK BADGES */}

      {/* 1. Netflix (Top Right Outer) */}
      <div className="absolute top-[8%] right-[12%] z-20 animate-float-slow">
        <div className="flex items-center gap-1.5 bg-[#171a1f]/90 hover:bg-[#1f242c] backdrop-blur-md border border-[#2b3139] hover:border-[#e50914]/50 rounded-full px-2.5 py-1 text-xs text-white shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#e50914] text-white flex items-center justify-center font-bold text-[10px]">
            N
          </div>
          <span className="font-medium text-[11px] text-white">Netflix</span>
          <span className="text-[10px] font-semibold text-[#16c784] bg-[#16c784]/15 px-1 py-0.2 rounded">
            +1.2%
          </span>
        </div>
      </div>

      {/* 2. Meta (Top Right Inner) */}
      <div className="absolute top-[22%] right-[22%] z-20 animate-float-delayed">
        <div className="flex items-center gap-1.5 bg-[#171a1f]/90 hover:bg-[#1f242c] backdrop-blur-md border border-[#2b3139] hover:border-[#0866ff]/50 rounded-full px-2.5 py-1 text-xs text-white shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#0866ff] text-white flex items-center justify-center font-bold text-[10px]">
            M
          </div>
          <span className="font-medium text-[11px] text-white">Meta</span>
          <span className="text-[10px] font-semibold text-[#16c784] bg-[#16c784]/15 px-1 py-0.2 rounded">
            +2.1%
          </span>
        </div>
      </div>

      {/* 3. Apple (Top Center-Left) */}
      <div className="absolute top-[18%] left-[28%] z-20 animate-float-medium">
        <div className="flex items-center gap-1.5 bg-[#171a1f]/90 hover:bg-[#1f242c] backdrop-blur-md border border-[#2b3139] hover:border-gray-400/50 rounded-full px-2.5 py-1 text-xs text-white shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#333] text-white flex items-center justify-center font-bold text-[10px]">
            A
          </div>
          <span className="font-medium text-[11px] text-white">Apple</span>
          <span className="text-[10px] font-semibold text-[#16c784] bg-[#16c784]/15 px-1 py-0.2 rounded">
            +1.8%
          </span>
        </div>
      </div>

      {/* 4. Alphabet (Left Middle-Upper) */}
      <div className="absolute top-[32%] left-[18%] z-20 animate-float-slow">
        <div className="flex items-center gap-1.5 bg-[#171a1f]/90 hover:bg-[#1f242c] backdrop-blur-md border border-[#2b3139] hover:border-blue-400/50 rounded-full px-2.5 py-1 text-xs text-white shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
          <span className="font-medium text-[11px] text-white">Alphabet</span>
          <span className="text-[10px] font-semibold text-[#16c784] bg-[#16c784]/15 px-1 py-0.2 rounded">
            +0.7%
          </span>
        </div>
      </div>

      {/* 5. Strategy (Far Left Middle) */}
      <div className="absolute top-[38%] left-[2%] z-20 animate-float-delayed">
        <div className="flex items-center gap-1.5 bg-[#171a1f]/90 hover:bg-[#1f242c] backdrop-blur-md border border-[#2b3139] hover:border-[#84cc16]/50 rounded-full px-2.5 py-1 text-xs text-white shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#84cc16] text-black flex items-center justify-center font-bold text-[10px]">
            S
          </div>
          <span className="font-medium text-[11px] text-white">Strategy</span>
          <span className="text-[10px] font-semibold text-[#16c784] bg-[#16c784]/15 px-1 py-0.2 rounded">
            +5.3%
          </span>
        </div>
      </div>

      {/* 6. Tesla (Center-Bottom Left) */}
      <div className="absolute bottom-[30%] left-[26%] z-20 animate-float-medium">
        <div className="flex items-center gap-1.5 bg-[#171a1f]/90 hover:bg-[#1f242c] backdrop-blur-md border border-[#2b3139] hover:border-[#e82127]/50 rounded-full px-2.5 py-1 text-xs text-white shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#e82127] text-white flex items-center justify-center font-bold text-[10px]">
            T
          </div>
          <span className="font-medium text-[11px] text-white">Tesla</span>
          <span className="text-[10px] font-semibold text-[#f6465d] bg-[#f6465d]/15 px-1 py-0.2 rounded">
            -0.6%
          </span>
        </div>
      </div>

      {/* 7. Amazon (Bottom Left) */}
      <div className="absolute bottom-[18%] left-[22%] z-20 animate-float-slow">
        <div className="flex items-center gap-1.5 bg-[#171a1f]/90 hover:bg-[#1f242c] backdrop-blur-md border border-[#2b3139] hover:border-[#ff9900]/50 rounded-full px-2.5 py-1 text-xs text-white shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#ff9900] text-black flex items-center justify-center font-bold text-[10px]">
            a
          </div>
          <span className="font-medium text-[11px] text-white">Amazon</span>
          <span className="text-[10px] font-semibold text-[#16c784] bg-[#16c784]/15 px-1 py-0.2 rounded">
            +1.4%
          </span>
        </div>
      </div>

      {/* 8. NVIDIA (Right Middle-Inner) */}
      <div className="absolute top-[42%] right-[14%] z-20 animate-float-medium">
        <div className="flex items-center gap-1.5 bg-[#171a1f]/90 hover:bg-[#1f242c] backdrop-blur-md border border-[#2b3139] hover:border-[#76b900]/50 rounded-full px-2.5 py-1 text-xs text-white shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
          <span className="font-medium text-[11px] text-white">NVIDIA</span>
          <span className="text-[10px] font-semibold text-[#16c784] bg-[#16c784]/15 px-1 py-0.2 rounded">
            +3.2%
          </span>
        </div>
      </div>

      {/* 9. Microsoft (Right Middle-Lower) */}
      <div className="absolute bottom-[34%] right-[18%] z-20 animate-float-delayed">
        <div className="flex items-center gap-1.5 bg-[#171a1f]/90 hover:bg-[#1f242c] backdrop-blur-md border border-[#2b3139] hover:border-[#00a4ef]/50 rounded-full px-2.5 py-1 text-xs text-white shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#00a4ef] text-white flex items-center justify-center font-bold text-[10px]">
            M
          </div>
          <span className="font-medium text-[11px] text-white">Microsoft</span>
        </div>
      </div>

      {/* 10. AMD (Far Right Lower) */}
      <div className="absolute bottom-[36%] right-[2%] z-20 animate-float-slow">
        <div className="flex items-center gap-1.5 bg-[#171a1f]/90 hover:bg-[#1f242c] backdrop-blur-md border border-[#2b3139] hover:border-[#ed1c24]/50 rounded-full px-2.5 py-1 text-xs text-white shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#ed1c24] text-white flex items-center justify-center font-bold text-[10px]">
            A
          </div>
          <span className="font-medium text-[11px] text-white">AMD</span>
          <span className="text-[10px] font-semibold text-[#f6465d] bg-[#f6465d]/15 px-1 py-0.2 rounded">
            -1.1%
          </span>
        </div>
      </div>

      {/* 11. Markets Live Status Pill (Bottom Left) */}
      <div className="absolute bottom-[6%] left-[16%] z-20">
        <div className="flex items-center gap-2 bg-[#12161b]/95 border border-[#2b3139] rounded-full px-3 py-1 text-xs shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16c784] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16c784]"></span>
          </span>
          <span className="text-[11px] font-medium text-[#eaecef]">Markets live</span>
        </div>
      </div>

      {/* 12. Coinbase (Bottom Right-Center) */}
      <div className="absolute bottom-[6%] right-[28%] z-20 animate-float-medium">
        <div className="flex items-center gap-1.5 bg-[#171a1f]/90 hover:bg-[#1f242c] backdrop-blur-md border border-[#2b3139] hover:border-blue-500/50 rounded-full px-2.5 py-1 text-xs text-white shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
          <span className="font-medium text-[11px] text-white">Coinbase</span>
          <span className="text-[10px] font-semibold text-[#16c784] bg-[#16c784]/15 px-1 py-0.2 rounded">
            +4.5%
          </span>
        </div>
      </div>
    </div>
  );
}
