
# DocsColab 🔋

DocsColab is a powerful, collaborative document editing platform designed to enhance teamwork and productivity. With real-time updates, robust document management, and seamless user authentication, DocsColab is your go-to solution for creating, sharing, and collaborating on documents.

## Features

### 👉 Authentication
- **GitHub Integration**: Secure user authentication using GitHub via NextAuth.
- **Session Management**: Reliable sign-in and sign-out functionalities with session handling.

### 👉 Collaborative Text Editor
- **Real-Time Collaboration**: Multiple users can edit the same document simultaneously with instant updates.
- **Lexical Editor Integration**: Rich text editing experience with support for inline formatting, hyperlinks, and more.

### 👉 Documents Management
- **Create Documents**: Easily create new documents, which are auto-saved and listed in your dashboard.
- **Delete Documents**: Remove documents you own with a simple click.
- **Share Documents**: Share documents via email or link, with customizable view/edit permissions.
- **List Documents**: Display all your documents, including those shared with you. Search and sort functionalities make finding documents easy.

### 👉 Comments
- **Inline Comments**: Add comments directly in the text for precise feedback.
- **General Comments**: Provide overarching feedback on the entire document.
- **Threaded Discussions**: Engage in discussions with collaborators via comment threads.

### 👉 Active Collaborators on Text Editor
- **Presence Indicators**: See who else is working on the document in real-time, with indicators showing active collaborators.

### 👉 Notifications
- **Document Shares**: Get notified when a document is shared with you.
- **New Comments**: Stay updated with alerts on new comments and replies.
- **Collaborator Activities**: Be informed of any significant collaborator actions on shared documents.

### 👉 Responsive Design
- **Cross-Device Compatibility**: Enjoy a seamless experience across desktops, tablets, and mobile devices.

### And Many More...
- **Code Architecture**: Built with reusability and scalability in mind, making it easy to maintain and extend.
- **Sentry Integration**: Monitor application performance and errors with Sentry, ensuring smooth operation.

## Tech Stack

- **Next.js**: The React framework for production.
- **TypeScript**: Strongly typed JavaScript for improved developer experience and code quality.
- **Liveblocks**: Real-time presence, storage, and collaboration features.
- **Lexical Editor**: Rich text editor framework for building a modern and performant editing experience.
- **ShadCN**: Comprehensive component library for UI consistency.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Clerk**: Authentication and user management solution integrated with Next.js.
- **Node.js**: Server-side JavaScript runtime environment.
- **Sentry**: Application monitoring and error tracking.

## Getting Started

To run the project locally:

1. **Clone the repository:**

   ```bash
   git remote add origin https://github.com/Satyasuranjeet/DocsColab.git
   cd docscolab
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & LiveBlocks credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/) and [Liveblocks](liveblocks.io/) website.

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open the app in your browser:**

   Visit [http://localhost:3000](http://localhost:3000) to start using DocsColab.

## Contributing

Contributions are welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) before submitting any pull requests.

---

Happy Collaborating! ✨ Developed by Satya ``)->

![Screenshot](https://github.com/Satyasuranjeet/DocsColab/blob/master/public/assets/images/2.png)
![Screenshot](https://github.com/Satyasuranjeet/DocsColab/blob/master/public/assets/images/3.png)
![Screenshot](https://github.com/Satyasuranjeet/DocsColab/blob/master/public/assets/images/4.png)
![Screenshot](https://github.com/Satyasuranjeet/DocsColab/blob/master/public/assets/images/5.png)
![Screenshot](https://github.com/Satyasuranjeet/DocsColab/blob/master/public/assets/images/1.png)
