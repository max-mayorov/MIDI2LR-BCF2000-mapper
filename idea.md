A tool to map LR commands to BCF2000 MIDI commands

1) Panels with LR commands as in LR
2) Grid with BCF2000 layout - knobs/buttons/faders + buttons to switch preset
3) Drag-n-drop commands to layout
4) Tool generates MIDI2LR config + BCF preset file -> download as zip

 LR commands gets mapped to a certain MIDI command (as 1-to-1) 
 and then MIDI commands are assigned to different knobs/buttons/faders on different presets
 
  Algorithm:
  
  1) Accept MIDI2LR config + BCF preset file
  2) read both - extract channel, code and command - match files
  3) display elements on BCF2000 layout
  4) allow drag-n-drop
  
  
  Another one
  1) Map all possible commands in LR to a MIDI command
  2) create a BCF2000 layout with these commands 
  