---
layout: post
title:  "Information Flow from a Plan Perspective"
date:   2021-10-16 13:36:08 +0200
categories: plan
---

<div class="mermaid">
graph TD;
A(JQL Explicit Query)
B(JQL Calculated from Board)
C(Filter)
D(Report Configuration)
E(Scope360 Internal Issue Store)
F(Scope360 Plan Perspective View)
G(Operations)
A & B --> G --> E --> C --> D --> F
</div>

The main usage explained here is to Analyze Plan from the Jira issue search view or from a Jira Kanban board.
