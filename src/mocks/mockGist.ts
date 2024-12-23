import { Gist } from "../interfaces/gist";

export const mockGist: Gist[] = [
    {
        "description": "Improving animation performance using CSS",
        "id": "unique-id-67891willchange",
        "category": "css",
        "language": "css",
        date: new Date("2024-11-22T00:00:00.000Z"),
        "title": "Optimizing with will-change",
        "sections": [
            {
                "id": "section-2-1",
                "title": "Optimizing Animations with will-change",
                "code": `
  .animated-element {
      will-change: transform, opacity;
  }
            `,
                "description": "The `will-change` property helps the browser optimize for animations by preparing for changes to specified properties.",
                "notes": {
                    "content": "In this example, we hint to the browser that the `transform` and `opacity` properties will change, allowing it to optimize rendering and provide smoother animations."
                },
                "info": {
                    "content": "Use `will-change` sparingly, as overusing it can negatively impact performance by consuming unnecessary resources."
                }
            }
        ]
    },
    {
        "description": "Key Types for React with TypeScript",
        "id": "unique-id-54321",
        "category": "typescript",
        "language": "typescript",
        "date": new Date("2024-11-22"),
        "title": "Compilation of Essential Types for React and TypeScript Integration",
        "sections": [
            {
                "id": "section-3-1",
                "title": "Reusable Button Component",
                "code": `
  import React, { ButtonHTMLAttributes } from 'react';
  
  interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
  
  const Button: React.FC<Props> = ({ children, className, ...props }) => {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  };
  
  export default Button;
            `,
                "description": "A reusable React button component that accepts custom CSS classes and standard button properties.",
                "notes": {
                    "content": "This component extends the default HTML button attributes, allowing for consistent styling and behavior across the application."
                }
            }
        ]
    },
    {
        "description": "Here you can find the keys to enable your Node backend project.",
        "id": "unique-id-67890api",
        "category": "apirest",
        "language": "typescript",
        "gitLink": "https://github.com/JuanCarloscdf/ExpressTemplate",
        "date": new Date("2024-11-22"),
        "title": "Begin your Express TypeScript Backend",
        "sections": [
            {
                "id": "section-1",
                "title": "Init the project using pnpm",
                "code": " pnpm init",
                "description": "Initialize the project with a package.json file."
            },
            {
                "id": "section-2",
                "title": "Install dependencies and initialize TypeScript",
                "code": `
  pnpm i express cors dotenv
  pnpm i -D typescript ts-node nodemon @types/express
  pnpx tsc --init
                `,
                "description": "Install essential dependencies for development and initialize TypeScript.",
                "notes": { "content": "Install @types/express to enable TypeScript inference for Express." }
            },
            {
                "id": "section-3",
                "title": "Configure nodemon (./nodemon.json)",
                "description": "Create a new file called `nodemon.json` in the main directory and paste the following:",
                "code": `
    {
      "watch": ["src"],
      "ext": "ts",
      "exec": "ts-node ./src/index.ts"
    }
                `,
                "notes": { "content": "If your main directory is named something else, update the 'exec' path accordingly." }
            },
            {
                "id": "section-4",
                "title": "Update package.json scripts",
                "code": `
    "scripts": {
        "dev": "nodemon - exec 'ts-node' src/index.ts"
    }
                `,
                "description": "Add a script to run the app with nodemon and TypeScript."
            },
            {
                "id": "section-6",
                "title": "Configure dotenv in a separate file. (./config.ts)",
                "code": `
    import dotenv from "dotenv";
    dotenv.config();
    
    export const appConfig = {
      port: process.env.PORT || "2500"
    };
    `,
                "description": "Set up environment variables in a `config.ts` file.",
                "notes": { "content": "Organize your environment variables as needed." }
            },
            {
                "id": "section-7",
                "title": "Create the main app file (`src/index.ts`)",
                "code": `
    import express, { Request, Response } from 'express';
    import cors from 'cors';
    import { appConfig } from '../config';
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    
    // Health endpoint
    app.get('/', (_req: Request, res: Response) => {
        res.send({ message: "Hello from Ts Express App" });
    });
    
    const PORT = appConfig.port;
    app.listen(PORT, () => {
        console.log(\`Running on port \${PORT}\`);
    });
                `,
                "description": "Initialize the Express app, configure middleware, and set up a health endpoint."
            },
            {
                "id": "section-8",
                "title": "Enable automatic route imports. (./src/routes/index.ts)",
                "code": `
    import { Router } from 'express';
    import { readdirSync } from 'fs';
    
    const router = Router();
    const DIR: string = __dirname;
    
    readdirSync(DIR).forEach((filename) => {
      const fixedFileName = filename.split('.')[0];
      if (fixedFileName !== 'index') {
        import(\`./\${fixedFileName}\`).then((module) => {
          router.use(\`/\${fixedFileName}\`, module.router);
        });
      }
    });
    
    export { router };
                `,
                "description": "Automatically load route files from the `routes` directory.",
                "notes": { "content": "Ensure all route files export a `router` object." }
            },
            {
                "id": "section-9",
                "title": "Update the main app to use routes",
                "code": `
    import express, { Request, Response } from 'express';
    import cors from 'cors';
    import { appConfig } from '../config';
    import { router } from './routes';
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    
    // Health endpoint
    app.get('/', (_req: Request, res: Response) => {
        res.send({ message: "Hello from Ts Express App" });
    });
    
    // Routes
    app.use(router);
    
    const PORT = appConfig.port;
    app.listen(PORT, () => {
        console.log(\`Running on port \${PORT}\`);
    });
                `,
                "description": "Add automatic route imports to the main app file."
            },
            {
                "id": "section-10",
                "title": "Create a user route (`src/routes/user.ts`)",
                "code": `
    import { Request, Response, Router } from "express";
    
    const router = Router();
    
    router.get('/', (_req: Request, res: Response) => {
        res.status(200).send({ message: "Hello from user endpoint" });
    });
    
    export { router };
                `,
                "description": "Create a `user` route file to handle requests to `/user`.",
                "notes": { "content": "Add new route files to the `routes` directory for automatic import." },
                info: { content: "You can make request from files into Requests directory ./resquets" },
                warning: { content: "Remember set a .gitignore file and add node_modules/ .env files to avoid security issues." }

            }
        ]
    },
    {
        "description": "Here, you can find the keys to use `react-syntax-highlighter`.",
        "id": "unique-id-12345highlighter",
        "category": "react",
        gitLink: "https://github.com/JuanCarloscdf/React-higlighter-Component",
        "language": "typescript",
        "date": new Date("2024-12-02"),
        "title": "Adding code block in React using Higlighter",
        "sections": [
            {
                "id": "section-1",
                "title": "Instalation",
                "code": `
    pnpi -D @types/react-syntax-highlighter
    pnpi react-syntax-highlighter
                `,
                "description": "Install the dependencies and types if you are using Typescript",
                "warning": { content: "install @types/... only if you are using typescript" }
            },
            {
                "id": "section-2",
                "title": "Call the component and choose a theme",
                "code": `
    import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';
    import SyntaxHighlighter from "react-syntax-highlighter";
    const code = ...;
    const Highlighter = () => {
        return (
            <SyntaxHighlighter
                language="typescript"
                style={theme}
                customStyle={{ padding: "1rem" }}
            >
                {code}
            </SyntaxHighlighter>
        );
    };
    
    export default Highlighter;
                `,
                description: "Code to call the component and set some props, I used atomOneDark theme of `react-syntax-highlighter`.",
                notes: {
                    content: "Here the theme list",
                    link: "https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD"
                },
                info: {
                    content: "Here the languages list",
                    link: "https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD"
                },

            },
            {
                "id": "section-2665",
                "title": "Improving performance ",
                "code": `
    import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';
    const SyntaxHighlighter = lazy(() => import("react-syntax-highlighter"))
    const code = ...
    const Highlighter = () => {
        return (
            <Suspense>
                <SyntaxHighlighter
                    language="typescript"
                    style={theme}
                    customStyle={{ padding: "1rem"}}
                >
                    {code}
                </SyntaxHighlighter>
            </Suspense>
        );
    };
    
    export default Highlighter;
                `,
                description: "Become string into HTML can be slow, which might affect your app's performance, to avoid this you can use Lazy from react",
                warning: { content: "Remember wrap your component between Suspense" }
            },
            {
                "id": "section-2665334",
                "title": "Final code",
                "code": `
    import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';
    import { lazy, Suspense } from 'react';

    const SyntaxHighlighter = lazy(() => import("react-syntax-highlighter"))
    const code = \`const [counter, setCounter] = useState(0);
    <div>
        <span>{counter}</span>
        <button onClick={() => setCounter(prev => prev + 1)}>add</button>
        <button onClick={() => setCounter(prev => prev - 1)}>substarct</button>
    </div>
    \`

    const Highlighter = () => {
        return (
            <div className='text-start flex flex-col gap-4 w-full'>
                <h2 className='...'>highlighter Component</h2>
                <div className='...'>
                    <Suspense>
                        <SyntaxHighlighter
                            language="typescript"
                            style={theme}
                            customStyle={{ padding: "1rem", textAlign: "start", background: "transparent" }}
                        >
                            {code}
                        </SyntaxHighlighter>
                    </Suspense>
                </div>
            </div>
        );
    };

    export default Highlighter;
`,
                description: "Here the final code.",
            },
            {
                "id": "section-2665344434",
                "title": "Pluss ++ ",
                "code": `
    function copyToClipboard() {
        navigator.clipboard.writeText(code)
    }

`,
                description: "If you need share the code, you only need this.",
            }
        ]
    },
    {
        "description": "Here is a guide to creating and using portals in React, including optimizations like `forwardRef`, singleton, and custom hooks.",
        "id": "unique-id-12345portals",
        "category": "react",
        "gitLink": "https://github.com/JuanCarloscdf/React-Portal",
        "language": "typescript",
        "date": new Date(),
        "title": "Advanced Portals in React with Singleton and Custom Hook",
        "sections": [
            {
                "id": "section-1",
                "title": "Add a new container for portals",
                "code": `
    <body>
        <div id="root"></div>
        <div id="portals"></div>
        <script type="module" src="/src/main.tsx"></script>
    </body>
                `,
                "description": "Add a `div` container with `id='portals'` to host portal components outside of the root element."
            },
            {
                "id": "section-2",
                "title": "Create a portal component",
                "code": `
    import { SetStateAction } from "react";
    import { createPortal } from "react-dom";
    
    const MessagePortal = ({ isActive, setIsActive }: { isActive: boolean, setIsActive: React.Dispatch<SetStateAction<boolean>> }) => {
        return createPortal(
            <div className={\`\${isActive ? "fixed" : "hidden"} top-0 left-0 w-full h-full\`}>
                <div className="w-full h-full flex flex-col justify-center items-center bg-white">
                    <button onClick={() => setIsActive(false)}>close</button>
                    <h1>I'm rendering outside of the root div</h1>
                </div>
            </div>,
            document.getElementById("portals") as HTMLElement
        );
    };
    
    export default MessagePortal;
                `,
                "description": "A basic portal component rendering inside the `portals` container."
            },
            {
                "id": "section-3",
                "title": "Use the portal in a component",
                "code": `
    import { useState } from "react";
    import MessagePortal from "./portals/MessagePortal";
    
    function App() {
      const [isActive, setIsActive] = useState(false);
      return (
        <div className='text-white'>
          <AnoterComponent />
          <MessagePortal isActive={isActive} setIsActive={setIsActive} />
          <button onClick={() => setIsActive(true)}>open portal</button>
        </div>
      )
    }
    
    export default App;
                `,
                "description": "Call the portal component in the app. Notice that `AnotherComponent` re-renders when the portal is opened."
            },
            {
                "id": "section-4",
                "title": "Optimize with `forwardRef`",
                "code": `
    import { forwardRef, useImperativeHandle, useState } from "react";
    import { createPortal } from "react-dom";
    
    export type MsgMethods = {
        open: () => void;
        close: () => void;
    };
    
    const MessageRefPortal = forwardRef<MsgMethods>((_, ref) => {
        const [isActive, setIsActive] = useState(false);
    
        useImperativeHandle(ref, () => ({
            open: () => setIsActive(true),
            close: () => setIsActive(false)
        }));
    
        return createPortal(
            <div className={\`\${isActive ? "fixed" : "hidden"} top-0 left-0 w-full h-full\`}>
                <div className="w-full h-full bg-white flex flex-col justify-center items-center">
                    <button onClick={() => setIsActive(false)}>close</button>
                    <p>This portal uses forwardRef and requires a ref.</p>
                </div>
            </div>,
            document.getElementById("portals") as HTMLElement
        );
    });
    
    export default MessageRefPortal;
                `,
                "description": "Wrap the portal with `forwardRef` for precise control using `useImperativeHandle`."
            },
            {
                "id": "section-5",
                "title": "Call the portal with `ref`",
                "code": `
    import { useRef } from 'react';
    import MessageRefPortal, { MsgMethods } from './portals/MessageRefPortal';
    
    function App() {
      const portalRef = useRef<MsgMethods>(null);
    
      return (
        <div className='text-white'>
          <AnoterComponent />
          <div>
            <MessageRefPortal ref={portalRef} />
            <button onClick={() => portalRef.current?.open()}>ref portal</button>
          </div>
        </div>
      );
    }
    
    export default App;
                `,
                "description": "Call the `open` and `close` methods directly using the `ref`."
            },
            {
                "id": "section-6",
                "title": "Optimize further with a singleton",
                "code": `
    import { createContext, MutableRefObject, ReactNode, useCallback, useRef } from "react";
    import { MsgMethods } from "../portals/MessageRefPortal";
    
    export type MsgValue = {
        open: () => void;
        close: () => void;
        ref: MutableRefObject<MsgMethods | null>;
    };
    
    export const MessageContext = createContext<MsgValue | null>(null);
    
    export const MessageProvider = ({ children }: { children: ReactNode }) => {
        const msgRef = useRef<MsgMethods>(null);
    
        const open = useCallback(() => {
            msgRef.current?.open();
        }, []);
    
        const close = useCallback(() => {
            msgRef.current?.close();
        }, []);
    
        const value = { open, close, ref: msgRef };
    
        return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
    };
                `,
                "description": "Wrap the app with a context provider to ensure the portal is initialized only once."
            },
            {
                "id": "section-7",
                "title": "Create a custom hook",
                "code": `
    import { useContext } from "react";
    import { MessageContext, MsgValue } from "../context/MessageContext";
    
    export function useMessage() {
        const context = useContext(MessageContext) as MsgValue;
        if (!context) throw new Error("MessageContext provider is required");
        return context;
    }
                `,
                "description": "Provide an easier interface for accessing the portal methods."
            },
            {
                "id": "section-8",
                "title": "Use the singleton portal",
                "code": `
    import { useMessage } from './hooks/useMessage';
    
    function App() {
      const { ref: msgRef } = useMessage();
    
      return (
        <div className='text-white'>
          <AnoterComponent />
          <div>
            <MessageRefPortal ref={msgRef} />
          </div>
        </div>
      );
    }
    
    export default App;
                `,
                "description": "The portal is now initialized globally, and its methods can be called from anywhere in the app."
            },
            {
                "id": "section-9",
                "title": "Call the portal methods globally",
                "code": `
    import { useMessage } from "../hooks/useMessage";
    
    const AnoterComponent = () => {
        const { open } = useMessage();
    
        return (
            <div>
                <h1>AnotherComponent</h1>
                <button onClick={() => open()}>open portal</button>
            </div>
        );
    };
    
    export default AnoterComponent;
                `,
                "description": "Use the portal's methods anywhere with the custom hook."
            }
        ]
    }
]