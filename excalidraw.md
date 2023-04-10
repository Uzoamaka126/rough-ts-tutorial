# Library Implementation Flow Chart

## Things to account for

- Start of flow: name library
- Check if there's an existing streak
- Initialize, update or reset streak


### flow
- App calls streak counter
    - Does streak exist?
    - Yes
        - Is there any change to streak?
            - No
                - Leave streak as it is. No modifications necessary
            - Yes
                - Update or reset streak. Then return it.
    - No
        Create and return a new streak