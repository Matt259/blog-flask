
#Gets dates from table
def get_dates_column(blogs):    
    dates = []
    for blog in blogs:
        dates.append(str(blog.date))
    return dates

#Removed the month and day part of the date
def trim_dates(dates):  
    for Index, date in enumerate(dates):
        dates[Index] = date[:4]
    return dates

#Removes duplicates, current year and sorts
def get_unique_dates(dates):    
    unique_dates = []
    [unique_dates.append(x) for x in dates if x not in unique_dates]
    unique_dates.sort(reverse=True)
    if "2022" in unique_dates:
        unique_dates.pop(0)
    return unique_dates

def get_dates(blogs):
    dates = get_dates_column(blogs)
    trimDates = trim_dates(dates)
    return get_unique_dates(trimDates) 