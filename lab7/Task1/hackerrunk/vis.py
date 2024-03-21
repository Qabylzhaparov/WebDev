n = int(input())
def Vis(n):
    if ((n%4==0 and n%100!=0) or n%400==0):
        print(True)
    else:
        print(False)
Vis(n)