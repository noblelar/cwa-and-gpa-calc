#!/bin/bash

# Check if filename is provided as an argument
if [ $# -ne 1 ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

filename=$1

# Check if the file exists
if [ ! -f "$filename" ]; then
    echo "File '$filename' not found."
    exit 1
fi

# Use temporary file for modifications
temp_file=$(mktemp)

# Read the file line by line, remove the first and second quotation marks, and write modified lines to temporary file
while IFS= read -r line; do
    # Remove the first and second quotation marks
    modified_line=$(echo "$line" | sed 's/^"//' | sed 's/"//')
    echo "$modified_line" >> "$temp_file"
done < "$filename"

# Overwrite the original file with modified content
mv "$temp_file" "$filename"

echo "Quotation marks removed from $filename."
