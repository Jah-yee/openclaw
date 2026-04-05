import { describe, it, expect } from "vitest";
import { isToolWrappedWithBeforeToolCallHook } from "./pi-tools.before-tool-call.js";
import { createOpenClawTools } from "./openclaw-tools.js";

describe("before_tool_call hook integration", () => {
  it("should wrap message tool with before_tool_call hook", async () => {
    const tools = await createOpenClawTools({});
    const messageTool = tools.find(t => t.name === "message");
    expect(messageTool).toBeDefined();
    
    // Check if wrapped
    if (messageTool) {
      expect(isToolWrappedWithBeforeToolCallHook(messageTool)).toBe(true);
    }
  });
});
