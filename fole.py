
# #create empty salespeople & melons_sold lists
to_do = {}

#open sales-report file
f = open('activities.txt')

# #loop over each line in activities file
for line in f:
    #get rid of any trailing space, split on '|', 
    # entries is a list containing all words on that line
    line = line.rstrip()
    entries = line.split('|')
    #activity is found at index 0 of entries, hence we assign to activity var
    activity = entries[0]
    
    to_do[id] = activity

#iterate starting at 0 going up to length of dict
for i in range(len(to_do)):
    #at current index, print person and their quantity sold
    print(f'the activity {activity} is on line {id} ')



