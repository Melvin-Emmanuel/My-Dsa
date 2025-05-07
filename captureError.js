function captureErrorStack(errorObj, constructorOpt) {
      Error.captureStackTrace(errorObj, constructorOpt);
      }

      // Exaple (Node.js):
      function CustomError(message) {
        this.message = message;
        stack(this, CustomError);
          }
