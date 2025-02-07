import { Link2, FileText, FolderUp, Settings } from "lucide-react"

export default function UploadSource() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#121212] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent_50%)] flex items-center justify-center p-4">
      <div className="text-center max-w-[460px] w-full">
        <h1 className="text-[32px] font-extralight mb-2 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFFCC] bg-clip-text text-transparent">
          Upload Source
        </h1>
        <p className="text-sm mb-6 bg-gradient-to-b from-[#ABABAB] to-[#ABABAB99] bg-clip-text text-transparent">
          Share files of your choice to start a conversation
        </p>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Link2, label: "Drop Link" },
            { icon: FileText, label: "Write Text" },
            { icon: FolderUp, label: "Browse File" },
            { icon: Settings, label: "Use Extension" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg p-5 flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-[7px]"></div>
              <item.icon className="relative w-5 h-5 text-white mb-1.5 filter drop-shadow-[0_0_1px_rgba(255,255,255,0.5)]" />
              <span className="relative text-white text-[13px]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

