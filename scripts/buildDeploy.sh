#!/bin/bash
cd /Users/ankushjha/Desktop/wiscon/NavHer
bun run build && firebase deploy --only hosting
