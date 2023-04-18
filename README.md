# Domain Name Checker

A simple React component that checks the availability of a domain name and displays the price if available. It also has a button for domain name registration

## Features

- Checks the availability of a domain name.
- Displays the price of the domain name if available.
- Allows the user to register the domain name if it's available.

## Usage

1. Clone the repository:

``` git clone https://github.com/rabinsxp/domain-name-checker.git ```

2. Install dependencies:

``` cd domain-name-checker ```
``` npm install ``` 


3. Create a `.env.local` file and add your HostMario API key:

``` NEXT_PUBLIC_HOSTMARIO_API_KEY=your-api-key-here ```

Make sure you need to signup for free HostMario Domain registration API to get the API credentials.

4. Start the development server:

``` npm run dev ```


5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

6. Enter a domain name and click "Check Availability".

## Props

The `DomainChecker` component accepts the following props:

| Prop         | Type     | Default  | Description                                           |
| ------------ | -------- | -------- | ----------------------------------------------------- |
| `buttonText` | `string` | `"Check"` | The text to display on the "Check Availability" button |

## License

This project is licensed under the [MIT license](https://opensource.org/license/mit/).
