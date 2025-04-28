function runMicrotask(task) {
      queueMicrotask(task);
      }

      // Example:
      runMicrotask(() => console.log('Microtask executed'));
