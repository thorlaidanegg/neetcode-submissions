class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        
        vector<vector<string>> ans;
        unordered_map<string,vector<string>> momo;

        for(auto s:strs)
        {
            vector<int> mp(26,0);
            
            for(auto c:s)
            {
                mp[c-'a']++;
            }

            string start = to_string(mp[0]);

            for(int i=1;i<26;i++)
            {
                start+=","+to_string(mp[i]);
            }

            momo[start].push_back(s);
            
        }

        for(auto i:momo) 
        {
            ans.push_back(i.second);
        }

        return ans;

    }
};
