$(document).ready(function() {
    (new Blinken({title: "Chaos", author: "anjanar"})).run(function(lights) {
     
        var snake_array = [
            {
                pos: 5,
                length: 25,
                delta: 1,
                r: 1,
                g: 0.5,
                b: 1
            }, 
            {
                pos: 74,
                length: 25,
                delta: -1,
                r: 0,
                g: 0.9,
                b: 0.6
            },
            {
                pos: 0,
                length: 3,
                delta: 3,
                r: 1,
                g: 0,
                b: 0
            },
            {
                pos: 96,
                length: 3,
                delta: 3,
                r: 0,
                g: 0,
                b: 1
            },
            {
                pos: 50,
                length: 3,
                delta: 3,
                r: 0,
                g: 1,
                b: 0
            }
            ];

        // Set the strand to full brightness
        for (i=0; i<100; i++) {
            lights[i].a = 1;
        }
     
        // Return our update function
        return function () {
     
            // Loop over all the lights 
           for(i = 0; i < 100; i++)
            {
                lights[i].rgb(Math.random(), Math.random(), Math.random());
            }
            for(i = 0; i < snake_array.length; i++)
            {
                for(j = snake_array[i].pos; j < snake_array[i].pos + snake_array[i].length; j++)
                {
                    lights[j].rgb(snake_array[i].r, snake_array[i].g, snake_array[i].b);
                }
                if(snake_array[i].pos + snake_array[i].length + snake_array[i].delta >= lights.length && snake_array[i].delta > 0)
                {
                    snake_array[i].delta *= -1;
                }
                if(snake_array[i].pos + snake_array[i].delta <= 0 && snake_array[i].delta < 0)
                {
                    snake_array[i].delta *= -1;
                }
                snake_array[i].pos += snake_array[i].delta;

            }
            
            // Wait 500 ms until we get called again.
            return 50;
        };
    });
});