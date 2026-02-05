---
name: daily-sprint
description: 'Wakes up, reads ROADMAPPING.md, and completes the next 3 atomic tasks for CruiseFrnds.'
---

# GOAL
Perform an autonomous coding sprint to hit the 1,000-commit goal.

# INSTRUCTIONS
Read ROADMAPPING.md to find the first 3 atomic tasks (marked with `[ ]` inside Epics).

For each task:
1. **Code the feature**: Implement the changes required by the task.
2. **Verify**: Use the Integrated Browser or run build/test commands to verify functionality.
3. **Commit**: Perform a Git commit individually with a descriptive 'feat:' or 'fix:' message.
4. **Update Roadmap**: Mark the tasks as `[x]` in `ROADMAPPING.md`, appending a timestamp if possible.

Push all changes to the main branch after the batch is done.

# CONSTRAINTS
- Use **Turbo Mode** for terminal commands (SafeToAutoRun: true).
- **Do not ask for user permission** between tasks.
- If a task fails, log it in `ERRORS.md` and skip to the next.
