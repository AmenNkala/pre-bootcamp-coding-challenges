function calcTriangleArea(x, y, z){
    var s;
    s = (1/2) * (x + y + z);        //calculate semiperimeter of the triangle
    var area = Math.sqrt(s * (s - x) * (s - y) * (s - z));       //using Heron's formula
    console.log(area);   
}

//test data
calcTriangleArea(Math.sqrt(34), 3, 5);
calcTriangleArea(3, 4, 5);

