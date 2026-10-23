export type CardVariant = "primary" | "secondary" | "danger";

export type CardOptions = {
  title: string;
  description?: string;
  variant?: CardVariant;
  content: HTMLElement | string;
  onClose?: () => void;
  className?: string;
};

// Strongly typed variant-to-CSS mapping
const VARIANT_CLASS_MAP: Readonly<Record<CardVariant, string>> = {
  primary: "card-primary",
  secondary: "card-secondary",
  danger: "card-danger",
} as const;

export function createCard(options: CardOptions): HTMLElement {
  const {
    title,
    description,
    variant = "secondary",
    content,
    onClose,
    className = "",
  } = options;

  // Root container
  const card = document.createElement("article");
  const variantClass = VARIANT_CLASS_MAP[variant];
  card.className = `card ${variantClass} ${className}`.trim();

  // Header
  const header = document.createElement("header");
  header.className = "card-header";

  const textContainer = document.createElement("div");
  const titleEl = document.createElement("h3");
  titleEl.className = "card-title";
  titleEl.textContent = title;
  textContainer.appendChild(titleEl);

  if (description) {
    const descEl = document.createElement("p");
    descEl.className = "card-description";
    descEl.textContent = description;
    textContainer.appendChild(descEl);
  }

  header.appendChild(textContainer);

  // Optional Close Button with cleanup
  if (onClose) {
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "card-close-btn";
    closeBtn.setAttribute("aria-label", "Close card");
    closeBtn.textContent = "✕";

    closeBtn.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
        onClose();
      },
      { once: true }
    );

    header.appendChild(closeBtn);
  }

  card.appendChild(header);

  // Body Content
  const body = document.createElement("section");
  body.className = "card-body";

  if (typeof content === "string") {
    body.textContent = content;
  } else {
    body.appendChild(content);
  }

  card.appendChild(body);

  return card;
}



const myCard = createCard({
  title: "Account Suspended",
  description: "Billing details required",
  variant: "danger", // Type-safe: only allows "primary" | "secondary" | "danger"
  content: "Please update your payment method to restore service.",
  onClose: () => {
    myCard.remove();
  },
});

document.body.appendChild(myCard);