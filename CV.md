# This is the main page of my future portofolio

## Project Description
  This is a page that is destined to become my portofolio. At the moment, it simply displays a main page. Its content constitutes my CV. 
  
The page contains HTML, CSS and JavaScript.

  I used JavaScript in two places. First, i used it to make words (my soft skills) go by without
stop from the left to the right. <br>
  The second place I used JavaScript in is an image gallery.
  
 When writing the code to make the words go by, I had difficulties in making them reappear on the left after disappearing from the right to make 
 it seem as if there was an infinite loop. Finally, I used the modulo: positionFromTheLeft = position  % endPosition. As long as the position is smaller 
 than the endPosition, positionFromTheLeft is equal to position. When position = endPosition, positionFromTheLeft becomes 0 and then the words begin again on 
 the left, and so on. I had to make sure that the initial position was hidden from view so that the words don't reappear directly on the screen, so the start 
 is offscreen.
 
 Making the words go backwards was also something I struggled with. I had to translate the positions so that the end position became the start position and conversely. 
 I could then calculate the current position and translate the posititons again. 
 
 One problem I haven't gotten around to is the fact that the space between the words isn't always the same.
 
