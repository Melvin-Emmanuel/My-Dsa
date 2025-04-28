function groupBy(arr, callback) {
      return Object.groupBy(arr, callback);
      }

      // Example:
      const people = [
        { name: 'Alice', age: 20 },
          { name: 'Bob', age: 20 },
            { name: 'Charlie', age: 30 }
            ];

            console.log(groupBy(people, person => person.age));
