def rotate_left3(nums):
  nums.append(nums[0])
  nums.remove(nums[0])
  return nums
