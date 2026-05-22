# simple heuristic: ~4 chars per token
def estimate_tokens(text: str) -> int:
    return max(1, len(text) // 4)
