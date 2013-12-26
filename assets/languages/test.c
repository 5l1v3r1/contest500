#include <string.h>
#include <stdio.h>

int parse_int(char num) {
    if (num < '0' || num > '9') return -1;
    return num - '0';
}

int is_solution(const char * aStr) {
    if (strlen(aStr) != 11) return 0;
    int a = parse_int(aStr[0]);
    int b = parse_int(aStr[1]);
    int c = parse_int(aStr[2]);
    int d = parse_int(aStr[3]);
    int e = parse_int(aStr[4]);
    int f = parse_int(aStr[5]);
    int g = parse_int(aStr[6]);
    int h = parse_int(aStr[7]);
    int i = parse_int(aStr[8]);
    int j = parse_int(aStr[9]);
    int k = parse_int(aStr[10]);
    if (a < 0 || b < 0 || c < 0 || d < 0 || e < 0 || f < 0 || g < 0 ||
        h < 0 || i < 0 || j < 0 || k < 0) {
        return -1;
    }
    if (b == 0 || i == 0 || e == 0 || c == 0 || d == 0) return 0;
    if (j / b != f) return 0;
    if (c / i != b) return 0;
    if (d / e != a) return 0;
    if (h / e != b) return 0;
    if (b % c != e) return 0;
    if (f % d != j / d) return 0;
    if (k % i != j) return 0;
    if (k % d != a * b) return 0;
    if (e - g != i) return 0;
    if (d - g != c) return 0;
    if (k + a != d) return 0;
    if (a * b != e * i) return 0;
    return 1;
}

int main(int argc, const char * argv[]) {
    char buff[512];
    while (1) {
        if (!fgets(buff, 512, stdin)) return 0;
        if (buff[strlen(buff) - 1] == '\n') {
            buff[strlen(buff) - 1] = 0;
        }
        if (strlen(buff) > 0) {
            if (buff[strlen(buff) - 1] == '\r') {
                buff[strlen(buff) - 1] = 0;
            }
        }
        int result = is_solution(buff);
        if (result == 1) {
            printf("correct key!\n");
            return 0;
        } else if (result == 0) {
            printf("invalid result :(\n");
        } else {
            fprintf(stderr, "string must be numeric\n");
        }
    }
    return 0;
}
