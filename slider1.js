            var the_timer, x_position = 0, the_image;
            
            function set_timer() {
                the_image = 
                x_position = x_position + 1;
                the_image.style.left = x_position;
                the_timer = setTimeout(set_timer, 50); 
            }