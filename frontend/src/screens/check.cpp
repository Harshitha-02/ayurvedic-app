#include <iostream>
#include <string>

using namespace std;

bool is_beautiful(const string& s) {
    int n = s.length();
    for (int i = 1; i < n; ++i) {
        if (s[i] == s[i - 1]) return false; // Check for palindrome of length 2
        if (i > 1 && s[i] == s[i - 2]) return false; // Check for palindrome of length 3
    }
    return true;
}

bool increment_string(string& s, int k) {
    int n = s.length();
    for (int i = n - 1; i >= 0; --i) {
        if (s[i] < 'a' + k - 1) {
            s[i]++;
            for (int j = i + 1; j < n; ++j) {
                s[j] = 'a';
            }
            return true;
        }
    }
    return false; // Indicate that we've reached the end of possibilities
}

string next_beautiful_string(int k, string current_string) {
    while (increment_string(current_string, k)) {
        if (is_beautiful(current_string)) {
            return current_string;
        }
    }
    return "-1"; // If no beautiful string is found
}

int main() {
    int k;
    string current_string;
    cin >> k >> current_string;

    string next_string = next_beautiful_string(k, current_string);
    cout << next_string << endl;

    return 0;
}
