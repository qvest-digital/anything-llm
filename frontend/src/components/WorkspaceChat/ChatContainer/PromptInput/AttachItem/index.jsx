import useUser from "@/hooks/useUser";
import { PaperclipHorizontal } from "@phosphor-icons/react";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

/**
 * This is a simple proxy component that clicks on the DnD file uploader for the user.
 * @returns
 */
export default function AttachItem() {
  const { user } = useUser();
  const { t } = useTranslation();
  if (!!user && user.role === "default") return null;

  return (
    <>
      <button
        id="attach-item-btn"
        data-tooltip-id="attach-item-btn"
        data-tooltip-content={t("chat.prompt.attach")}
        aria-label={t("chat.prompt.attach")}
        type="button"
        onClick={(e) => {
          e?.target?.blur();
          document?.getElementById("dnd-chat-file-uploader")?.click();
        }}
        className={`border-none relative flex justify-center items-center opacity-60 hover:opacity-100 light:opacity-100 light:hover:opacity-60 cursor-pointer`}
      >
        <PaperclipHorizontal
          color="var(--theme-sidebar-footer-icon-fill)"
          className="w-[22px] h-[22px] pointer-events-none text-white rotate-90 -scale-y-100"
        />
      </button>
      <Tooltip
        id="attach-item-btn"
        place="top"
        delayShow={300}
        className="tooltip !text-xs z-[99]"
      />
    </>
  );
}
