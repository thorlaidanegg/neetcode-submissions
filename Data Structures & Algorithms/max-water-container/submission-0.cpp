class Solution {
public:

    int area(int i, int j,vector<int>& heights)
    {

        int breadth = j - i;
        int height = min(heights[j],heights[i]);
        
        return breadth * height;
    
    }



    int maxArea(vector<int>& heights) {
        
        int i=0;
        int j=heights.size()-1;

        int ans = 0;

        while(i<j)
        {
            int a = area(i,j,heights);
            ans = max(a,ans);

            if(heights[i]<heights[j])
            {
                i++;
            }
            else
                j--;

        }

        return ans;
        


    }
};
