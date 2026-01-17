import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Phone,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("https://portfolio-production-b3ce.up.railway.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send");

      setStatus("success");
      setFeedback("Message sent successfully. I’ll get back to you soon!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again or contact me directly.");
    }
  };

  return (
    <section id="contact" className="aurora-bg py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s{" "}
            <span className="text-blue-400">
              Connect
            </span>
          </h2>

          <div className="mx-auto mt-4 w-24 h-[2px] bg-blue-500/50 rounded-full" />

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Open to opportunities, collaborations, and exciting projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              {
                label: "Email",
                value: "atharvaggarwal606@gmail.com",
                href: "mailto:atharvaggarwal606@gmail.com",
                icon: Mail,
              },
              {
                label: "Mobile",
                value: "+91 70604 88939",
                href: "tel:+917060488939",
                icon: Phone,
              },
              {
                label: "Location",
                value: "India",
                href: null,
                icon: MapPin,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href || undefined}
                  className="flex items-center gap-4 p-5 rounded-xl
                             bg-[#2a2a2a]/80 backdrop-blur-md
                             border border-white/10
                             hover:border-blue-500/40 transition"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg
                               bg-blue-500/10"
                  >
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-gray-200">{item.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Social */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Aggarwal2003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl
                           bg-[#2a2a2a]/80 backdrop-blur-md
                           border border-white/10
                           hover:border-blue-500/40 transition"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/aggarwal-atharv/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl
                           bg-[#2a2a2a]/80 backdrop-blur-md
                           border border-white/10
                           hover:border-blue-500/40 transition"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#2a2a2a]/80 backdrop-blur-md p-8 rounded-2xl
                       border border-white/10
                       hover:border-blue-500/40 transition"
          >
            <h3 className="text-xl font-semibold mb-6">
              Send a Message
            </h3>

            {["name", "email"].map((field) => (
              <div key={field} className="mb-5">
                <label className="block text-sm text-gray-400 mb-2 capitalize">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg
                             bg-black/40 border border-white/10
                             focus:outline-none focus:border-blue-500
                             transition"
                />
              </div>
            ))}

            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg
                           bg-black/40 border border-white/10
                           focus:outline-none focus:border-blue-500
                           resize-none transition"
              />
            </div>

            {/* Feedback */}
            {status !== "idle" && (
              <div
                className={`mb-4 flex items-center gap-2 text-sm rounded-lg px-3 py-2
                  ${
                    status === "success"
                      ? "bg-green-500/10 text-green-400"
                      : status === "error"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-blue-500/10 text-blue-400"
                  }
                `}
              >
                {status === "success" && <CheckCircle className="w-4 h-4" />}
                {status === "error" && <AlertCircle className="w-4 h-4" />}
                <span>{feedback || "Sending..."}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2
                         px-6 py-3 rounded-lg font-medium
                         bg-blue-600 hover:bg-blue-700
                         transition
                         disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
