//rat in a maze
/*
uses back tracking 
backtrack 0-->1
forward 1---> 0 so that no path repeated
m*n is the size of a matrix 
*/

function ratMaze(m,n,i,j){
  if(i==n-1 && j=n-1){
   if(m[i][j]==1)
     ans.push_back(current);
    return;
  }
  if(i<0 || j<0 || i>=n|| j>=n || m[i][j]==0){
    return ;
    
  }
  m[i][j]==0;
  
}
