
import { useState } from "react";

function CopyPassword({ password }) {
    const [isCopied, setIsCopied] = useState(false);

    function copyToClipboard() {
        navigator.clipboard.writeText(password).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000); // Reset copied state after 2 seconds
        }).catch((err) => {
            console.error("Failed to copy: ", err);
        });
    }

    return (
        <div className="flex p-2 w-full justify-between">
            <h3 className="text-slate-500 font-thin uppercase font-mono tracking-wider text-xs md:text-base">Password 🔐</h3>
            <button className="text-slate-500 font-thin uppercase font-mono tracking-wider text-xs md:text-base" onClick={copyToClipboard}>
                {isCopied ? "✅ Copied!" : "📋 Copy"}
            </button>
        </div>
    );
}

export default CopyPassword;
