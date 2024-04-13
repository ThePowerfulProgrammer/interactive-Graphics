
// function sierpinski() --> Immediate Mode Graphics 
// {
//     init() 
//     p =  find_initial_point();

//     for (SOME NUM OF POINTS) 
//     {
//         q = generate_a_point(p);
//         display_the_point(q);
//         q = p;
//     }

//     cleanup();
// }

// Alternative 

// function sierpinski() --> retained mode graphics 
// {
//     init() 
//     p =  find_initial_point();

//     for (SOME NUM OF POINTS) 
//     {
//         q = generate_a_point(p);
//         save_the_point(q);
//         q = p;
//     }
//     display_all_points(); // reduce small chunks of code sent to the GPU
//     cleanup();
// }


// Alternative to the Alternative

// function sierpinski()
//  {
//     initialize_the_system();
//     p = find_initial_point();
//     for (some_number_of_points) 
//     {
//         q = generate_a_point(p);
//         store_the_point(q);
//         p=q;
//     }

//     send_all_points_to_GPU();
//     display_data_on_GPU();
//     cleanup();
//  }


