n = int(input())
l = [int(x) for x in input().split()]
cnt = 0
for i in range(1,n-1):
    if (l[i] > l[i-1]) & (l[i] > l[i+1]):
        cnt+=1
print(cnt)