import { Gist } from "../interfaces/gist";

export const mockGist: Gist[] = [
    {
        description: "React Portal con `useRef` y `forwardRef` para evitar re-renderizaciones innecesarias.",
        id: "unique-id-12345",
        category: "react hook",
        title: "Uso eficiente de React Portal con `useRef` y `forwardRef`",
        sections: [
            {
                id: "section-1",
                title: "React portal as forwardRef",
                code: `
  import { forwardRef, useImperativeHandle, useState } from 'react';

  export type MenuMethods = {
      openMenu: () => void;
      closeMenu: () => void;
  };

  const NavbarMenu = forwardRef<MenuMethods>((_, ref) => {
      const [isActive, setIsActive] = useState(false);

      useImperativeHandle(ref, () => ({
          openMenu: () => setIsActive(true),
          closeMenu: () => setIsActive(false),
      }));
      
      return (
          <div className={\`menu \${isActive ? "active" : ""}\`}>
              Contenido del menú
          </div>
      );
  });

  export default NavbarMenu;
          `,
                description: "Uso de `forwardRef` para exponer métodos de apertura y cierre del menú sin re-renderizar el componente padre.",
                notes: "Este primer bloque muestra cómo usar `forwardRef` y `useImperativeHandle` para definir métodos en una referencia (`ref`) que puede ser controlada externamente.",
                info: "Este primer bloque muestra cómo usar `forwardRef` y `useImperativeHandle` para definir métodos en una referencia (`ref`) que puede ser controlada externamente.",
                warning: "Este primer bloque muestra cómo usar `forwardRef` y `useImperativeHandle` para definir métodos en una referencia (`ref`) que puede ser controlada externamente."

            },
            {
                id: "section-2",
                title: "Portal Example",
                code: `
  import { createPortal } from 'react-dom';

  const PortalExample = ({ children }) => {
      return createPortal(
          <div className="portal-container">
              {children}
          </div>,
          document.getElementById("portals") as HTMLElement
      );
  };

  export default PortalExample;
          `,
                description: "Uso de portales en React para renderizar un componente en un elemento HTML externo al árbol principal.",
                notes: "Este bloque muestra cómo usar `createPortal` para insertar el contenido en un nodo específico del DOM."
            },
            {
                id: "section-3",
                title: "useImperativeHandle",
                code: `
  const NavbarMenu = forwardRef<MenuMethods>((_, ref) => {
      const [isActive, setIsActive] = useState(false);

      useImperativeHandle(ref, () => ({
          openMenu: () => setIsActive(true),
          closeMenu: () => setIsActive(false),
      }));
      
      return createPortal(
          <div className={\`menu \${isActive ? "active" : ""}\`}>
              Contenido del menú
          </div>,
          document.getElementById("portals") as HTMLElement
      );
  });

  export default NavbarMenu;
          `,
                description: "Uso de `forwardRef` combinado con `createPortal` para renderizar el menú en un portal.",
                notes: "Este bloque combina `forwardRef` y `createPortal`, permitiendo exponer métodos en una referencia (`ref`) mientras se renderiza el contenido en un portal."
            },
            {
                id: "section-4",
                title: "Component that needs a portal",
                code: `
  import { useState, useRef } from 'react';
  import NavbarMenu, { MenuMethods } from './NavbarMenu';

  const ToggleMenu = () => {
      const [activeMenu, setActiveMenu] = useState(false);
      const navRef = useRef<MenuMethods>(null);

      function toggle() {
          const newValue = !activeMenu;
          if (newValue) {
              navRef.current?.openMenu();
          } else {
              navRef.current?.closeMenu();
          }
          setActiveMenu(newValue);
      }

      return (
          <>
              <button onClick={toggle}>
                  {activeMenu ? "Cerrar Menú" : "Abrir Menú"}
              </button>
              <NavbarMenu ref={navRef} />
          </>
      );
  };

  export default ToggleMenu;
          `,
                description: "Creación de un componente (`ToggleMenu`) que llama al portal y controla su apertura/cierre mediante una referencia (`ref`).",
                notes: "Este bloque muestra cómo utilizar la referencia para interactuar con el portal sin provocar re-renderizaciones innecesarias en el componente padre."
            },
            {
                id: "section-5",
                title: "Final code",
                code: `
  import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
  import { createPortal } from 'react-dom';

  export type MenuMethods = {
      openMenu: () => void;
      closeMenu: () => void;
  };

  const NavbarMenu = forwardRef<MenuMethods>((_, ref) => {
      const [isActive, setIsActive] = useState(false);

      useImperativeHandle(ref, () => ({
          openMenu: () => setIsActive(true),
          closeMenu: () => setIsActive(false),
      }));
      
      return createPortal(
          <div className={\`menu \${isActive ? "active" : ""}\`}>
              Contenido del menú
          </div>,
          document.getElementById("portals") as HTMLElement
      );
  });

  const ToggleMenu = () => {
      const [activeMenu, setActiveMenu] = useState(false);
      const navRef = useRef<MenuMethods>(null);

      function toggle() {
          const newValue = !activeMenu;
          if (newValue) {
              navRef.current?.openMenu();
          } else {
              navRef.current?.closeMenu();
          }
          setActiveMenu(newValue);
      }

      return (
          <>
              <button onClick={toggle}>
                  {activeMenu ? "Cerrar Menú" : "Abrir Menú"}
              </button>
              <NavbarMenu ref={navRef} />
          </>
      );
  };

  export default ToggleMenu;
          `,
                description: "Código completo que implementa un React Portal usando `forwardRef` y `useImperativeHandle`.",
                notes: "Este último bloque une todos los conceptos anteriores en un ejemplo completo, mostrando cómo usar `forwardRef`, `createPortal`, y `useRef` para evitar re-renderizaciones innecesarias en React."
            }
        ]
    },
    {
        description: "Introducción y casos prácticos con `useState` para manejar estado en componentes funcionales de React.",
        id: "unique-id-67890",
        category: "react hook",
        title: "Manejo eficiente del estado con `useState` en React",
        sections: [
            {
                id: "section-1",
                title: "Uso básico de useState",
                code: `
      import { useState } from 'react';
    
      const Counter = () => {
          const [count, setCount] = useState(0);
    
          const increment = () => setCount(count + 1);
          const decrement = () => setCount(count - 1);
    
          return (
              <div>
                  <p>Contador: {count}</p>
                  <button onClick={increment}>Incrementar</button>
                  <button onClick={decrement}>Decrementar</button>
              </div>
          );
      };
    
      export default Counter;
                `,
                description: "Uso básico de `useState` para manejar el estado en un contador simple.",
                notes: "Este primer ejemplo muestra cómo inicializar y actualizar el estado utilizando el hook `useState`."
            },
            {
                id: "section-2",
                title: "useState con múltiples estados",
                code: `
      import { useState } from 'react';
    
      const Form = () => {
          const [name, setName] = useState('');
          const [email, setEmail] = useState('');
    
          const handleSubmit = (e) => {
              e.preventDefault();
              console.log({ name, email });
          };
    
          return (
              <form onSubmit={handleSubmit}>
                  <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Nombre" 
                  />
                  <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="Correo Electrónico" 
                  />
                  <button type="submit">Enviar</button>
              </form>
          );
      };
    
      export default Form;
                `,
                description: "Uso de `useState` para manejar múltiples valores en un formulario.",
                notes: "Este bloque muestra cómo manejar múltiples estados independientes dentro de un mismo componente."
            },
            {
                id: "section-3",
                title: "useState con objetos",
                code: `
      import { useState } from 'react';
    
      const UserProfile = () => {
          const [profile, setProfile] = useState({
              name: '',
              age: '',
              email: '',
          });
    
          const updateField = (field, value) => {
              setProfile((prev) => ({ ...prev, [field]: value }));
          };
    
          return (
              <div>
                  <input 
                      type="text" 
                      value={profile.name} 
                      onChange={(e) => updateField('name', e.target.value)} 
                      placeholder="Nombre" 
                  />
                  <input 
                      type="number" 
                      value={profile.age} 
                      onChange={(e) => updateField('age', e.target.value)} 
                      placeholder="Edad" 
                  />
                  <input 
                      type="email" 
                      value={profile.email} 
                      onChange={(e) => updateField('email', e.target.value)} 
                      placeholder="Correo Electrónico" 
                  />
                  <p>Perfil Actual: {JSON.stringify(profile)}</p>
              </div>
          );
      };
    
      export default UserProfile;
                `,
                description: "Uso de `useState` con objetos para manejar estados más complejos.",
                notes: "Este ejemplo muestra cómo manejar un estado compuesto utilizando `useState` y el operador spread (`...`)."
            },
            {
                id: "section-4",
                title: "Actualización de estado asíncrona",
                code: `
      import { useState } from 'react';
    
      const AsyncStateExample = () => {
          const [count, setCount] = useState(0);
    
          const handleClick = () => {
              setTimeout(() => {
                  setCount((prevCount) => prevCount + 1);
              }, 1000);
          };
    
          return (
              <div>
                  <p>Contador: {count}</p>
                  <button onClick={handleClick}>Incrementar después de 1 segundo</button>
              </div>
          );
      };
    
      export default AsyncStateExample;
                `,
                description: "Uso de una función en `setState` para manejar actualizaciones asíncronas.",
                notes: "Este ejemplo demuestra cómo evitar problemas con actualizaciones asincrónicas utilizando la versión de función en `setState`."
            },
            {
                id: "section-5",
                title: "Estado inicial con función",
                code: `
      import { useState } from 'react';
    
      const HeavyComputation = () => {
          const computeInitialValue = () => {
              console.log("Cálculo pesado...");
              return 42;
          };
    
          const [value, setValue] = useState(() => computeInitialValue());
    
          return (
              <div>
                  <p>Valor inicial: {value}</p>
                  <button onClick={() => setValue(value + 1)}>Incrementar</button>
              </div>
          );
      };
    
      export default HeavyComputation;
                `,
                description: "Inicialización de estado con una función para evitar cálculos innecesarios.",
                notes: "Este bloque muestra cómo pasar una función a `useState` para optimizar la inicialización del estado."
            }
        ]
    }
]