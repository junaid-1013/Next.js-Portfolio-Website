export const GithubIcon = ({ className, ...rest }: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h512v512H0z" />
        <path
            fill="currentColor"
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
    </svg>
);

export const TwitterIcon = ({ className, ...rest }: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 209"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v209H0z" />
        <path
            fill="#55acee"
            d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
        />
    </svg>
);

export const LinkedInIcon = ({ className, ...rest }: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <g fill="none">
            <rect width={256} height={256} fill="#fff" rx={60} />
            <rect width={256} height={256} fill="#0A66C2" rx={60} />
            <path
                fill="#fff"
                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
            />
        </g>
    </svg>
);

export const CircularText = ({ className, ...rest }: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={500}
        height={500}
        viewBox="0 0 375 375"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path d="m142.206 334.013 12.922-24.14 3.828.64 3.516 21.64 10.484-19.25 3.906.657 4.204 27.063-3.766-.641-3.375-21.984-10.75 19.593-3.36-.578-3.515-22.125-10.625 19.719ZM124.985 308.623c.117-.262.277-.586.484-.97l14.703 6.22c.48-1.688.325-3.274-.468-4.75-.79-1.47-2.07-2.582-3.844-3.344-2.164-.914-4.219-.922-6.156-.016l-.922-2.89a8.674 8.674 0 0 1 3.984-.875c1.43.011 2.89.336 4.39.968 1.93.813 3.47 1.93 4.626 3.344 1.148 1.418 1.824 3 2.03 4.75.212 1.75-.065 3.516-.827 5.297-.738 1.758-1.797 3.176-3.172 4.25a9.191 9.191 0 0 1-4.64 1.906c-1.708.207-3.43-.054-5.173-.781-1.726-.73-3.101-1.777-4.125-3.14a9.089 9.089 0 0 1-1.78-4.641c-.177-1.73.12-3.508.89-5.328Zm6.172 10.359c1.574.664 3.093.738 4.562.219 1.461-.512 2.61-1.5 3.453-2.969l-11.625-4.922c-.468 1.613-.375 3.129.282 4.547.648 1.414 1.757 2.457 3.328 3.125ZM106.73 309.31c-1.594-1.043-2.797-2.325-3.61-3.844a9.01 9.01 0 0 1-1.078-4.89c.094-1.727.68-3.427 1.75-5.095 1.075-1.656 2.387-2.89 3.938-3.703a9.008 9.008 0 0 1 4.906-1.062c1.73.105 3.39.68 4.984 1.719 1.23.793 2.2 1.757 2.907 2.89a7.797 7.797 0 0 1 1.187 3.719l1.688-2.625 2.875 1.86-14.938 23.14-3-1.938 5.875-9.109a7.546 7.546 0 0 1-3.765.375c-1.282-.2-2.52-.68-3.72-1.437Zm9.453-14.11c-1.05-.687-2.156-1.05-3.313-1.094a6.437 6.437 0 0 0-3.343.766c-1.063.563-1.961 1.418-2.703 2.563-.727 1.148-1.133 2.32-1.22 3.515a6.107 6.107 0 0 0 .688 3.328c.532 1.032 1.325 1.891 2.375 2.578 1.043.665 2.149 1.032 3.313 1.094a6.054 6.054 0 0 0 3.312-.75c1.055-.574 1.946-1.433 2.672-2.578.742-1.148 1.156-2.312 1.25-3.5a6.157 6.157 0 0 0-.656-3.344c-.54-1.05-1.332-1.91-2.375-2.578ZM67.354 284.383l20.266-18.657 2.312 2.5-2.297 2.11a7.593 7.593 0 0 1 3.875.547c1.23.511 2.34 1.304 3.328 2.375 1.293 1.398 2.141 2.937 2.547 4.625a8.97 8.97 0 0 1-.203 5c-.55 1.656-1.555 3.156-3.016 4.5-1.445 1.332-3.015 2.195-4.703 2.593a8.996 8.996 0 0 1-5-.234c-1.632-.543-3.097-1.512-4.39-2.906-.946-1.043-1.63-2.184-2.047-3.422a7.462 7.462 0 0 1-.281-3.75l-7.97 7.344Zm25-9.25c-.832-.907-1.805-1.535-2.922-1.89a6.104 6.104 0 0 0-3.422-.08c-1.156.294-2.238.903-3.25 1.83-.988.917-1.676 1.937-2.062 3.062a5.966 5.966 0 0 0-.188 3.406c.262 1.133.809 2.156 1.64 3.062.868.926 1.852 1.563 2.954 1.907 1.094.351 2.23.39 3.406.109 1.168-.281 2.246-.883 3.235-1.797 1.011-.93 1.703-1.96 2.078-3.094.375-1.144.445-2.285.203-3.422-.25-1.132-.805-2.164-1.672-3.093ZM67.051 252.255c.242-.156.555-.336.938-.546l8.64 13.437c1.336-1.125 2.094-2.516 2.281-4.172.18-1.664-.253-3.312-1.296-4.937-1.27-1.977-2.957-3.145-5.063-3.5l.86-2.891c1.367.188 2.636.695 3.812 1.516 1.168.812 2.195 1.906 3.078 3.28 1.125 1.763 1.766 3.556 1.922 5.376.148 1.812-.188 3.5-1 5.062-.82 1.563-2.047 2.864-3.672 3.907-1.601 1.03-3.281 1.597-5.031 1.703-1.75.113-3.383-.23-4.906-1.031-1.532-.793-2.805-1.98-3.829-3.563-1.007-1.57-1.55-3.207-1.625-4.906-.082-1.707.297-3.32 1.141-4.844.836-1.531 2.086-2.828 3.75-3.89Zm-.75 12.016c.93 1.438 2.14 2.36 3.64 2.766 1.493.406 3 .238 4.532-.5l-6.828-10.625c-1.29 1.062-2.067 2.367-2.328 3.906-.258 1.531.07 3.016.984 4.453ZM48.971 236.167l21.469-.03 1.469 3.327-14.531 15.813-1.5-3.406 11.718-12.547-17.218.047ZM52.717 212.1c.274-.07.621-.14 1.047-.203l4.078 15.438c1.637-.656 2.797-1.75 3.485-3.281.68-1.532.773-3.227.281-5.094-.602-2.27-1.852-3.898-3.75-4.89l1.719-2.485c1.242.594 2.293 1.465 3.156 2.61.855 1.136 1.496 2.495 1.922 4.077.531 2.012.59 3.907.172 5.688-.414 1.773-1.254 3.277-2.516 4.516-1.258 1.23-2.828 2.093-4.703 2.593-1.844.489-3.61.516-5.297.078-1.695-.43-3.148-1.253-4.36-2.484-1.218-1.226-2.066-2.754-2.546-4.578-.477-1.813-.488-3.535-.031-5.172.449-1.644 1.308-3.062 2.578-4.25 1.261-1.195 2.851-2.05 4.765-2.562Zm-4.406 11.22c.438 1.656 1.309 2.913 2.61 3.765 1.292.844 2.777 1.14 4.453.89l-3.22-12.203c-1.55.618-2.687 1.618-3.405 3-.727 1.387-.875 2.903-.438 4.547ZM34.62 209.92l-.5-3.531 27.28-3.828.5 3.53ZM60.66 188.864c.032 1.961-.367 3.73-1.203 5.313a9.504 9.504 0 0 1-3.515 3.718c-1.508.899-3.235 1.36-5.172 1.39-1.926.032-3.656-.374-5.188-1.218a9.24 9.24 0 0 1-3.625-3.594c-.883-1.55-1.343-3.304-1.375-5.265-.031-1.946.371-3.703 1.203-5.266a9.31 9.31 0 0 1 3.5-3.703c1.5-.906 3.215-1.375 5.141-1.406 1.938-.031 3.68.383 5.219 1.234a9.53 9.53 0 0 1 3.64 3.578c.887 1.532 1.344 3.274 1.375 5.219Zm-3.109.047c-.02-1.258-.332-2.383-.937-3.375a6.132 6.132 0 0 0-2.485-2.297c-1.062-.55-2.273-.816-3.64-.797-1.352.024-2.551.328-3.594.922-1.051.586-1.852 1.383-2.406 2.39-.551 1.012-.817 2.15-.797 3.407.023 1.273.328 2.402.922 3.39.585.993 1.406 1.766 2.468 2.329 1.063.562 2.274.836 3.625.812 1.367-.02 2.57-.332 3.61-.937a6.38 6.38 0 0 0 2.422-2.422c.562-1.008.835-2.149.812-3.422ZM42.591 162.399c.293-1.883.977-3.504 2.047-4.86a9.052 9.052 0 0 1 4.031-2.937c1.625-.602 3.418-.75 5.375-.438 1.961.313 3.625 1.012 5 2.094a9.002 9.002 0 0 1 2.922 4.063c.594 1.617.742 3.367.453 5.25-.23 1.398-.703 2.636-1.422 3.718a7.987 7.987 0 0 1-2.828 2.579l10.047 1.609-.562 3.516-26.532-4.25.547-3.391 3.063.5a7.796 7.796 0 0 1-1.953-3.36c-.364-1.289-.426-2.656-.188-4.093Zm16.703 2.984c.2-1.25.09-2.41-.328-3.484-.414-1.082-1.098-1.992-2.047-2.735-.945-.75-2.094-1.226-3.437-1.437-1.332-.219-2.567-.117-3.703.297-1.133.406-2.063 1.058-2.782 1.953-.726.898-1.191 1.969-1.39 3.219-.196 1.218-.086 2.37.328 3.453.418 1.074 1.101 1.984 2.047 2.734.937.742 2.074 1.219 3.406 1.438 1.344.21 2.586.117 3.719-.282a6.172 6.172 0 0 0 2.797-1.953c.73-.914 1.195-1.984 1.39-3.203ZM61.291 133.021c.262.094.594.23 1 .406l-5.187 15.11c1.71.355 3.277.09 4.703-.797 1.418-.883 2.437-2.239 3.062-4.063.758-2.226.625-4.285-.406-6.172l2.813-1.109a8.794 8.794 0 0 1 1.171 3.937c.082 1.43-.14 2.915-.671 4.454-.68 1.968-1.684 3.578-3.016 4.828-1.332 1.242-2.863 2.027-4.594 2.36-1.726.323-3.508.167-5.344-.47-1.8-.613-3.285-1.57-4.453-2.875-1.175-1.312-1.925-2.812-2.25-4.5-.32-1.687-.175-3.422.438-5.203.617-1.77 1.57-3.21 2.86-4.328 1.28-1.125 2.78-1.828 4.5-2.11 1.71-.28 3.5-.1 5.374.532Zm-9.89 6.875c-.551 1.617-.52 3.137.093 4.562.606 1.43 1.668 2.508 3.188 3.235l4.094-11.938c-1.625-.343-3.118-.14-4.485.61-1.375.742-2.336 1.918-2.89 3.531ZM59.06 122.878c-.739-1.07-1.098-2.282-1.078-3.625.011-1.352.406-2.801 1.187-4.344l3.094 1.562a4.365 4.365 0 0 0-.422.688c-.863 1.719-1.031 3.336-.5 4.844.523 1.511 1.734 2.746 3.64 3.703l8.75 4.422-1.609 3.172-17.562-8.875 1.547-3.047ZM84.537 112.65c-.406.573-.95.921-1.625 1.046-.668.117-1.305-.047-1.922-.484-.582-.414-.922-.961-1.015-1.64a2.52 2.52 0 0 1 .453-1.892c.406-.55.937-.878 1.593-.984.657-.113 1.282.043 1.875.469.614.437.973.996 1.079 1.672a2.357 2.357 0 0 1-.438 1.812ZM119.22 79.168l-11.406-15.11 1.97 18.266-1.36 1.015-16.922-6.875 11.312 15.047-2.859 2.14L84.33 72.887l2.437-1.828 19.657 8.078-2.453-21.015 2.437-1.828 15.656 20.734ZM124.594 54.07c2.469-1.156 4.64-1.43 6.516-.828 1.875.594 3.375 2.094 4.5 4.5l5.03 10.75-3.062 1.422-1.093-2.344c-.157 1.075-.637 2.063-1.438 2.97-.793.905-1.871 1.683-3.234 2.327-1.992.93-3.809 1.196-5.453.797-1.649-.406-2.84-1.39-3.579-2.953-.738-1.582-.757-3.117-.062-4.61.7-1.488 2.289-2.816 4.781-3.984l5.11-2.39-.297-.625c-.649-1.395-1.547-2.27-2.703-2.625-1.157-.364-2.516-.18-4.079.547a10.262 10.262 0 0 0-2.859 1.968c-.844.824-1.476 1.688-1.906 2.594l-2.485-1.781c.586-1.176 1.43-2.258 2.532-3.25a15.242 15.242 0 0 1 3.781-2.485Zm6.594 16.032c1.226-.57 2.16-1.344 2.797-2.313.644-.969.937-2.05.875-3.25l-1.172-2.484-4.985 2.328c-2.718 1.281-3.648 2.84-2.78 4.672.413.906 1.085 1.453 2.015 1.64.937.188 2.02-.007 3.25-.593ZM153.38 64.699c-1.93.555-3.765.637-5.515.25a9.511 9.511 0 0 1-4.547-2.422c-1.274-1.219-2.176-2.754-2.72-4.61-.53-1.85-.577-3.628-.14-5.327a9.41 9.41 0 0 1 2.547-4.453c1.27-1.258 2.867-2.165 4.797-2.72 1.707-.5 3.332-.597 4.875-.296 1.55.305 2.879.996 3.984 2.078l-2.093 2.438c-.868-.72-1.805-1.18-2.813-1.391-1.012-.207-2.055-.156-3.125.156-1.242.367-2.273.965-3.094 1.797a6.169 6.169 0 0 0-1.64 3.016c-.274 1.168-.219 2.402.156 3.703.383 1.336 1.004 2.43 1.86 3.281a6.206 6.206 0 0 0 3 1.672c1.144.262 2.335.21 3.578-.156 1.07-.313 1.976-.817 2.718-1.516.739-.707 1.282-1.602 1.625-2.687l3.078.89a7.755 7.755 0 0 1-2.25 3.922c-1.148 1.086-2.574 1.875-4.28 2.375ZM171.747 40.832c2.488-.289 4.547.2 6.172 1.47 1.625 1.273 2.593 3.296 2.906 6.077l1.297 11.25-3.547.407-1.25-10.844c-.211-1.883-.828-3.254-1.86-4.11-1.023-.863-2.382-1.195-4.078-1-1.906.22-3.351.954-4.328 2.204-.98 1.242-1.351 2.902-1.11 4.984l1.157 10.078-3.531.406-3.14-27.359 3.53-.406 1.22 10.578c.632-1.008 1.515-1.844 2.64-2.5 1.133-.656 2.441-1.067 3.922-1.235ZM187.457 40.191l3.563.047-.266 19.672-3.562-.047Zm1.844-3.765c-.687-.008-1.261-.239-1.719-.688a2.214 2.214 0 0 1-.656-1.656 2.245 2.245 0 0 1 .703-1.64c.47-.446 1.047-.665 1.735-.657.695.012 1.27.242 1.718.688.458.437.68.976.672 1.609a2.323 2.323 0 0 1-.718 1.687c-.461.45-1.04.668-1.735.657ZM209.236 41.676c2.477.355 4.344 1.355 5.594 3 1.25 1.636 1.676 3.836 1.281 6.593l-1.609 11.22-3.531-.516 1.547-10.813c.27-1.875.02-3.352-.75-4.437-.774-1.082-2.008-1.75-3.703-2-1.907-.27-3.493.074-4.75 1.03-1.262.962-2.04 2.481-2.329 4.563l-1.437 10.032-3.531-.5 2.78-19.47 3.392.485-.422 2.938c.851-.914 1.925-1.551 3.218-1.907 1.29-.363 2.707-.437 4.25-.218ZM238.822 59.883c-.094.262-.23.594-.407 1l-15.187-4.937c-.324 1.718-.031 3.28.875 4.687.914 1.399 2.289 2.395 4.125 3 2.226.727 4.273.563 6.14-.5l1.157 2.781c-1.168.72-2.465 1.13-3.89 1.235-1.43.101-2.919-.102-4.47-.61-1.98-.636-3.605-1.609-4.875-2.922-1.273-1.312-2.09-2.828-2.453-4.546-.355-1.727-.23-3.516.375-5.36.594-1.812 1.531-3.312 2.813-4.5 1.289-1.195 2.773-1.969 4.453-2.312 1.687-.352 3.426-.239 5.219.343 1.78.575 3.238 1.497 4.375 2.766a8.976 8.976 0 0 1 2.187 4.484c.32 1.711.176 3.508-.437 5.391Zm-7.047-9.781c-1.625-.531-3.149-.477-4.563.156-1.418.625-2.48 1.711-3.187 3.25l12 3.906c.32-1.632.097-3.129-.672-4.484-.762-1.363-1.953-2.305-3.578-2.828ZM260.693 52.516l3.171 1.937-11.843 19.422 12.015 7.328-1.687 2.766-15.188-9.266ZM283.516 89.377c-.18.207-.43.461-.75.766l-12.125-10.391c-.96 1.469-1.289 3.027-.984 4.672.3 1.656 1.18 3.11 2.64 4.36 1.79 1.53 3.75 2.16 5.876 1.89v3.031c-1.356.207-2.715.086-4.079-.36-1.355-.448-2.652-1.202-3.89-2.265-1.586-1.367-2.711-2.898-3.375-4.594-.656-1.699-.824-3.414-.5-5.14.332-1.727 1.129-3.328 2.39-4.797 1.239-1.445 2.676-2.473 4.313-3.078 1.644-.613 3.312-.754 5-.422 1.695.324 3.266 1.094 4.703 2.312 1.426 1.22 2.414 2.637 2.969 4.25.562 1.606.66 3.258.297 4.954-.367 1.707-1.196 3.312-2.485 4.812Zm-2.734-11.734c-1.305-1.102-2.73-1.633-4.281-1.594-1.555.043-2.95.633-4.188 1.766l9.594 8.218c.926-1.386 1.289-2.851 1.094-4.39-.188-1.551-.93-2.883-2.219-4ZM298.978 91.683c1.757 2.074 2.597 4.094 2.515 6.063-.086 1.976-1.14 3.82-3.172 5.53l-9.078 7.657-2.172-2.578 1.985-1.672c-1.086.133-2.168-.07-3.25-.61-1.086-.53-2.11-1.374-3.078-2.53-1.418-1.68-2.149-3.368-2.188-5.063-.043-1.7.598-3.102 1.922-4.219 1.332-1.113 2.805-1.523 4.422-1.234 1.613.281 3.305 1.476 5.078 3.578l3.64 4.312.547-.453c1.165-.992 1.774-2.093 1.829-3.312.05-1.207-.485-2.473-1.61-3.797a10.024 10.024 0 0 0-2.656-2.234c-1.012-.602-2-.993-2.969-1.172l1.063-2.86c1.281.262 2.539.793 3.781 1.594 1.238.793 2.367 1.793 3.39 3Zm-13.75 10.563c.875 1.039 1.859 1.742 2.953 2.109 1.093.363 2.21.36 3.36-.016l2.108-1.78-3.546-4.204c-1.95-2.3-3.7-2.797-5.25-1.484-.762.632-1.11 1.425-1.047 2.375.062.957.535 1.957 1.422 3ZM307.63 109.193c1.29-.093 2.516.215 3.672.922 1.157.711 2.196 1.793 3.125 3.25l-2.921 1.86a4.305 4.305 0 0 0-.391-.72c-1.031-1.624-2.336-2.593-3.906-2.905-1.563-.313-3.246.105-5.047 1.25l-8.266 5.25-1.906-3.016 16.61-10.547 1.827 2.89ZM321.638 127.953c1.02 2.28 1.164 4.382.437 6.312-.719 1.938-2.351 3.473-4.89 4.61L306.84 143.5l-1.453-3.25 9.968-4.454c1.727-.78 2.848-1.793 3.36-3.03.508-1.231.414-2.622-.281-4.173-.782-1.761-1.918-2.922-3.407-3.484-1.48-.555-3.183-.402-5.109.453l-9.25 4.14-1.453-3.25 17.953-8.03 1.406 3.124-2.703 1.22c1.219.241 2.32.804 3.313 1.702 1 .895 1.816 2.055 2.453 3.485ZM326.988 142.74l1.031 3.407-18.844 5.672-1.031-3.407Zm4.14.61c-.199-.656-.152-1.266.141-1.828.3-.563.758-.938 1.375-1.125a2.271 2.271 0 0 1 1.781.172c.57.304.957.78 1.156 1.437.196.668.149 1.29-.14 1.86a2.082 2.082 0 0 1-1.328 1.109 2.31 2.31 0 0 1-1.828-.156c-.575-.313-.961-.801-1.157-1.47ZM332.14 163.937c.413 2.469.03 4.547-1.157 6.234-1.188 1.688-3.164 2.754-5.922 3.203l-11.172 1.86-.594-3.516 10.782-1.781c1.863-.313 3.203-1 4.015-2.063.813-1.062 1.078-2.433.797-4.11-.312-1.905-1.117-3.32-2.406-4.233-1.293-.918-2.98-1.204-5.063-.86l-10 1.656-.593-3.515 19.406-3.219.562 3.375-2.922.484c1.114.54 2.04 1.368 2.782 2.485.738 1.125 1.234 2.457 1.484 4ZM333.519 198.847l-17-.328c-3.438-.062-5.961-.965-7.578-2.703-1.614-1.742-2.383-4.309-2.313-7.703.031-1.856.32-3.621.86-5.297.53-1.668 1.28-3.012 2.25-4.031l2.703 1.765c-.813.895-1.458 2.016-1.938 3.36a12.683 12.683 0 0 0-.766 4.156c-.039 2.3.477 4.016 1.547 5.14 1.063 1.126 2.711 1.708 4.938 1.75l1.562.032a8.005 8.005 0 0 1-2.234-3.156c-.48-1.23-.711-2.563-.688-4 .04-1.887.477-3.586 1.313-5.094a9.04 9.04 0 0 1 3.437-3.516c1.47-.836 3.13-1.234 4.985-1.203 1.851.04 3.492.504 4.922 1.39a8.836 8.836 0 0 1 3.297 3.641c.77 1.54 1.132 3.254 1.093 5.141-.031 1.477-.328 2.848-.89 4.11a7.62 7.62 0 0 1-2.485 3.109l3.047.062ZM317.987 188.3c-.03 1.29.211 2.453.735 3.485.531 1.039 1.273 1.86 2.234 2.453.969.601 2.07.914 3.313.937 1.906.04 3.457-.562 4.656-1.812 1.207-1.242 1.832-2.852 1.875-4.828.031-2-.531-3.649-1.688-4.938-1.148-1.281-2.671-1.945-4.578-1.984-1.242-.024-2.355.25-3.343.812a6.102 6.102 0 0 0-2.329 2.375c-.562 1.02-.855 2.188-.875 3.5ZM309.728 231.584l-3.11-.875 5.063-18.156 25.031 6.984-4.937 17.672-3.125-.875 3.937-14.094-7.672-2.14-3.5 12.546-3.03-.843 3.5-12.547-8.095-2.25ZM318.598 251.942c-1.094 2.25-2.617 3.72-4.563 4.407-1.937.687-4.164.421-6.672-.797l-10.187-4.953 1.562-3.204 9.828 4.782c1.696.82 3.18 1.035 4.454.64 1.28-.398 2.289-1.367 3.03-2.906.845-1.73 1-3.344.47-4.844-.524-1.5-1.727-2.71-3.61-3.625l-9.125-4.437 1.563-3.203 17.687 8.61-1.5 3.077-2.672-1.312c.614 1.093.895 2.312.844 3.656-.055 1.344-.422 2.71-1.11 4.11ZM299.531 281.213l-13.672-10.078c-2.77-2.043-4.304-4.242-4.609-6.593-.312-2.356.543-4.903 2.563-7.641a18.004 18.004 0 0 1 3.75-3.813c1.406-1.054 2.796-1.71 4.171-1.984l1.188 3c-1.176.258-2.348.797-3.516 1.61a12.58 12.58 0 0 0-3.031 2.953c-1.363 1.843-1.937 3.53-1.719 5.062.219 1.54 1.227 2.973 3.016 4.297l1.266.937a8.061 8.061 0 0 1 0-3.859c.312-1.281.898-2.5 1.75-3.656 1.125-1.524 2.464-2.656 4.015-3.406a9.08 9.08 0 0 1 4.844-.875c1.676.164 3.266.8 4.766 1.906 1.488 1.094 2.554 2.414 3.203 3.969.644 1.562.836 3.191.578 4.89-.262 1.696-.953 3.305-2.078 4.828-.875 1.188-1.914 2.13-3.11 2.828a7.695 7.695 0 0 1-3.812 1.11l2.453 1.797Zm-6.562-17.578c-.77 1.032-1.242 2.118-1.422 3.266a5.98 5.98 0 0 0 .406 3.297c.45 1.05 1.172 1.945 2.172 2.687 1.531 1.125 3.145 1.524 4.844 1.203 1.695-.312 3.133-1.265 4.312-2.859 1.188-1.617 1.68-3.281 1.485-5-.2-1.71-1.063-3.125-2.594-4.25-1-.742-2.07-1.168-3.203-1.281a5.991 5.991 0 0 0-3.266.578c-1.039.508-1.953 1.297-2.734 2.36ZM294.153 286.836l-2.453 2.562-14.187-13.625 2.453-2.562Zm1.516 3.906c.477-.5 1.035-.762 1.672-.781a2.196 2.196 0 0 1 1.656.64c.457.446.692.992.703 1.64.02.645-.21 1.22-.687 1.72-.48.5-1.04.765-1.672.796a2.113 2.113 0 0 1-1.64-.625c-.481-.46-.727-1.015-.735-1.671-.012-.649.223-1.22.703-1.72ZM278.226 301.726c-1.937 1.57-3.93 2.254-5.984 2.047-2.05-.199-3.953-1.386-5.703-3.562l-7.11-8.828 2.766-2.235 6.844 8.516c1.187 1.469 2.45 2.289 3.781 2.469 1.324.176 2.649-.266 3.969-1.328 1.5-1.211 2.332-2.606 2.5-4.188.164-1.574-.414-3.18-1.734-4.812l-6.36-7.907 2.781-2.234 12.329 15.328-2.672 2.156-1.86-2.312c.082 1.238-.183 2.453-.797 3.64-.617 1.188-1.53 2.27-2.75 3.25ZM244.729 310.924a9.997 9.997 0 0 1-.453-.968l13.968-7.72c-1.031-1.417-2.367-2.273-4.015-2.562-1.645-.293-3.313.024-5 .953-2.063 1.145-3.344 2.754-3.844 4.829l-2.828-1.063c.281-1.336.87-2.559 1.765-3.672.899-1.117 2.059-2.07 3.485-2.86 1.824-1.01 3.648-1.53 5.469-1.562 1.824-.03 3.492.41 5 1.328 1.5.914 2.718 2.22 3.656 3.907.914 1.664 1.375 3.379 1.375 5.14 0 1.758-.45 3.375-1.344 4.844-.898 1.469-2.172 2.656-3.828 3.563-1.633.906-3.3 1.343-5 1.312-1.707-.031-3.297-.523-4.766-1.469-1.468-.937-2.68-2.273-3.64-4Zm11.953 1.532c1.5-.825 2.5-1.97 3-3.438.5-1.469.43-2.984-.203-4.547l-11.047 6.11c.969 1.343 2.215 2.195 3.734 2.562 1.524.375 3.027.145 4.516-.687ZM223.76 318.635c-.094-.262-.192-.61-.297-1.047l15.047-5.344c-.79-1.562-1.973-2.625-3.547-3.187-1.582-.555-3.286-.508-5.11.14-2.218.781-3.738 2.164-4.562 4.156l-2.61-1.515a8.644 8.644 0 0 1 2.329-3.36c1.062-.949 2.367-1.699 3.906-2.25 1.96-.699 3.84-.918 5.64-.656 1.805.27 3.375.977 4.72 2.125 1.343 1.156 2.335 2.649 2.984 4.485.632 1.789.804 3.546.515 5.265a9.263 9.263 0 0 1-2.125 4.563c-1.113 1.312-2.562 2.281-4.344 2.906-1.757.633-3.476.789-5.156.469-1.676-.313-3.16-1.055-4.453-2.219-1.3-1.156-2.281-2.668-2.937-4.531Zm11.546 3.453c1.618-.574 2.793-1.547 3.532-2.922.73-1.367.906-2.871.53-4.516l-11.89 4.235c.742 1.488 1.828 2.535 3.266 3.14 1.437.614 2.96.633 4.562.063ZM217.219 326.716c-.375 1.238-1.094 2.27-2.156 3.093-1.07.82-2.454 1.41-4.141 1.766l-.703-3.375c.2-.012.469-.055.812-.125 1.887-.387 3.25-1.258 4.094-2.61.844-1.355 1.047-3.078.61-5.171l-2-9.594 3.5-.719 4.015 19.266-3.36.703ZM193.335 313.138c.7-.03 1.309.176 1.828.625.524.457.797 1.063.828 1.813.043.719-.171 1.328-.64 1.828a2.493 2.493 0 0 1-1.766.812 2.37 2.37 0 0 1-1.765-.625c-.489-.437-.754-1.027-.797-1.765-.032-.75.183-1.383.64-1.89.45-.5 1.008-.766 1.672-.798Zm0 0" />
    </svg>
)

export const SunIcon = ({ className, ...rest }: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
            </g>
            <path
                fill="currentColor"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                opacity="0"
            >
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                    id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="6;10"
            />
        </circle>
    </svg>
);

export const MoonIcon = ({ className, ...rest }: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                />
            </path>
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                />
            </path>
            <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0"
        >
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;6"
            />
        </circle>
    </svg>
);

export const LinkArrow = ({ className, ...rest }: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
        />
    </svg>
);